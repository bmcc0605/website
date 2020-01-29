import * as React from "react";
import { Gradient } from "./Gradient";
import { HeaderIcon } from "./HeaderIcon";

/*
 * Header object which contains menu and link buttons. When above the fold, will display a black gradient as a background. When below, will switch to an orange background and display my name as well.
 */

interface HeaderProps
{
    style?: React.CSSProperties,
    isAboveFold: boolean,
    isMobileWidth: boolean,
}

interface HeaderState
{
}

export class Header extends React.Component<HeaderProps, HeaderState>
{
    constructor(props: HeaderProps)
    {
        super(props);
    }

    render ()
    {
        const HEADER_ICON_MARGIN = "26px";

        return (
            <div className = "header" style = {this.props.style}>
                <Gradient></Gradient>

                <div>
                    <div
                        className = "orange_slider"
                        style = 
                        {{
                            backgroundColor: "#ffa000",
                            height: "100%",
                            width: "100%",
                            position: "absolute",
                            zIndex: 1,
                            top: this.props.isAboveFold ? "-100%" : "0px",
                            transition: "top 0.7s",
                        }}
                    >
                    </div>
                </div>

                <div 
                    className = "left_justified_elements"
                    style = 
                    {{
                        marginTop: HEADER_ICON_MARGIN,
                        marginLeft: this.props.isMobileWidth ? HEADER_ICON_MARGIN : "8.3333vw",
                        marginRight: "auto",
                        flexDirection: "row",
                        zIndex: 2,
                    }}
                >
                    <HeaderIcon className = "icon-menu"></HeaderIcon>
                    <h1 
                        className = "name_in_header"
                        style =
                        {{
                            color: "white",
                            fontSize: "40px",
                            fontFamily: "Raleway",
                            alignItems: "center",
                            display: this.props.isMobileWidth ? "none" : "inline",
                            margin: "5px",
                            opacity: this.props.isAboveFold ? "0" : "1",
                            transition: "opacity 0.7s",
                        }}
                    >
                        Brad McCausland
                    </h1>
                </div>

                <div 
                    className = "right_justified_elements"
                    style = 
                    {{
                        marginTop: HEADER_ICON_MARGIN,
                        marginLeft: "auto",
                        marginRight: this.props.isMobileWidth ? HEADER_ICON_MARGIN : "8.3333vw",
                        flexDirection: "row",
                        zIndex: 2,
                    }}
                >
                    <HeaderIcon className = "icon-envelope"></HeaderIcon>
                    <HeaderIcon className = "icon-github"></HeaderIcon>
                    <HeaderIcon className = "icon-linkedin"></HeaderIcon>
                </div>
            </div>
        )
    }
}