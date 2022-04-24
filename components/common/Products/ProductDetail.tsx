import {Product} from "@framework/types";
import {FC, MouseEventHandler, useState} from "react";
import {useKeenSlider} from "keen-slider/react";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import {MediaItem} from "@framework/graphql";
import cn from "classnames";
import {ChevronRightIcon, ChevronLeftIcon} from "@heroicons/react/solid";
import s from "./Products.module.css";
import {AddToCart, ProductReview, Products} from ".";

interface Props {
    product: Product;
    relatedProducts: Product[];
}

function ThumbnailPlugin(mainRef: any) {
    return (slider: any) => {
        function removeActive() {
            slider.slides.forEach((slide: any) => {
                slide.classList.remove("active");
            });
        }

        function addActive(idx: number) {
            slider.slides[idx].classList.add("active");
        }

        function addClickEvents() {
            slider.slides.forEach((slide: any, idx: number) => {
                slide.addEventListener("click", () => {
                    if (mainRef.current) mainRef.current.moveToIdx(idx);
                });
            });
        }

        slider.on("created", () => {
            if (!mainRef.current) return;
            addActive(slider.track.details.rel);
            addClickEvents();
            mainRef.current.on("animationStarted", (main: any) => {
                removeActive();
                const next = main.animator.targetIdx || 0;
                addActive(main.track.absToRel(next));
                slider.moveToIdx(next);
            });
        });
    };
}

export const ProductDetail: FC<Props> = ({product, relatedProducts}) => {
    const [images] = useState(
        (product?.galleryImages?.nodes?.length as number) > 1
            ? (product?.galleryImages?.nodes as MediaItem[])
            : [product?.image]
    );
    const [currentIndex, setIndex] = useState(0);
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slides: {perView: 1},
    });
    const [thumbnail] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
            initial: 0,
            breakpoints: {
                "(min-width: 400px)": {
                    slides: {perView: 3, spacing: 5},
                },
                "(min-width: 1000px)": {
                    slides: {perView: 4, spacing: 10},
                },
            },
            slides: {perView: 1},
            slideChanged(slider) {
                setIndex(slider.track.details.rel);
            },
        },
        [ThumbnailPlugin(instanceRef)]
    );

    const selectImage = (index: number) => {
        setIndex(index);
    };

    const next = () => {
        instanceRef.current?.moveToIdx(
            currentIndex < images?.length - 1 ? currentIndex + 1 : 0
        );
    };
    const prev = () => instanceRef.current?.prev();

    const activeElement = (index: number) =>
        cn("keen-slider__slide flex justify-center", {
            "border-2 border-indigo-600": index === currentIndex,
        });

    return (
        <div>
            <div className={s.detailWrapper}>
                <div id="slider" className={s.slider}>
                    <div ref={sliderRef} className="keen-slider my-5 bg-gray-100">
                        {images?.map((img) => {
                            return (
                                <div
                                    className="keen-slider__slide relative flex justify-center"
                                    key={img?.id}
                                >
                                    <Image
                                        alt={img?.altText || ""}
                                        src={(img?.thumbnailSourceUrl as any) || ""}
                                        width={416}
                                        height={416}
                                    />
                                </div>
                            );
                        })}
                        <Arrow onClick={next}/>
                        <Arrow left onClick={prev}/>
                    </div>
                    <div ref={thumbnail} className="keen-slider my-5">
                        {images?.map((img, index) => {
                            return (
                                <div className={activeElement(index)} key={img?.id}>
                                    <Image
                                        onClick={() => selectImage(index)}
                                        alt={img?.altText || ""}
                                        src={(img?.thumbnailSourceUrl as any) || ""}
                                        width={200}
                                        height={200}
                                        className="cursor-pointer"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div id="detail" className={s.detail}>
                    <h4>{product?.name}</h4>
                    <div
                        className="p-5"
                        dangerouslySetInnerHTML={{__html: product?.description || ""}}
                    />
                    <div className="flex justify-between items-center">
                        <ProductReview product={product}/>
                        {(product?.reviewCount && (
                                <span>reviews ({product?.reviewCount})</span>
                            )) ||
                            ""}
                    </div>
                    <AddToCart product={product} block variant="default"/>
                </div>
            </div>
            <div id="related">
                <div className={s.title}>
                    <h2 className={s.heading}>Related Products</h2>
                </div>
                <Products products={relatedProducts}/>
            </div>
        </div>
    );
};

interface ArrowProps {
    left?: boolean;
    onClick: MouseEventHandler;
    disabled?: boolean;
}

const Arrow: FC<ArrowProps> = ({left, onClick, disabled}) => {
    const rootClass =
        "text-white absolute top-1/2 w-20 cursor-pointer transform -translate-y-1/2";
    const className = cn(rootClass, {
        "left-10": left,
        "right-10": !left,
        "pointer-events-none text-gray-100": disabled,
    });

    if (left) return <ChevronLeftIcon onClick={onClick} className={className}/>;

    return <ChevronRightIcon onClick={onClick} className={className}/>;
};
