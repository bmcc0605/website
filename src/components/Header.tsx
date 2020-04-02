import * as React from "react";
import { Gradient } from "./Gradient";
import { HeaderIcon } from "./HeaderIcon";
import { BMStyle } from '../BMStyle';
import { SlidingMenu } from './SlidingMenu';
import { ToggleSwitch } from "./ToggleSwitch";
import { SlidingMenuItem } from './SlidingMenuItem';
import { Link } from "react-router-dom";

/*
 * Header object which contains menu and link buttons. When above the fold, will display a black gradient as a background. When below, will switch to an orange background and display my name as well.
 */

interface HeaderProps
{
    // Setting isShowingSlidingBackdrop true will cause the header's orange background to appear. Will show the gradient background if false. Should only be set to false when above the fold on a hero image.
    isShowingSlidingBackdrop: boolean
}

interface HeaderState
{
    isMenuExtended: boolean,
}

export class Header extends React.Component<HeaderProps, HeaderState>
{
    constructor(props: HeaderProps)
    {
        super(props);
        this.state = 
        {
            isMenuExtended: false,
        }
    }

    toggleExtendMenu()
    {
        this.setState(
            {
                isMenuExtended: !this.state.isMenuExtended,
            }
        )
    }

    render ()
    {
        // Problem: I need to set side margins of the header icons to match the space between the tops of the icons and the top of the header
        // I could pass the height as a number, do all the math manually, and then convert them all to strings, but that feels hacky.
        // Side margins = (parent height - icon height) / 2
        const HEADER_ICON_FULL_WIDTH_MARGIN = "8.3333vw";
        const HEADER_ICON_MOBILE_WIDTH_MARGIN = "10px"; //10px = ((header height (70) - text element height (40)) / 2) - icon margin (5) Replace with calculated value

        return (
            <BMStyle.ThemeContext.Consumer>
            {theme => (
                <BMStyle.LanguageContext.Consumer>
                {language => (
                    <BMStyle.StateContext.Consumer>
                    {({IsMobileWidth}) => (
                        <div className = "header" style =
                            {{
                                position: "fixed",
                                top: "0",
                                width: "100%",
                                height: BMStyle.HeaderHeightString,
                                display: "flex",
                                zIndex: 3,
                                alignItems: "center",
                            }}
                        >
                            <Gradient></Gradient>

                            <SlidingMenu isExtended = {this.state.isMenuExtended} crossButtonAction = {this.toggleExtendMenu.bind(this)} isAboveFold = {this.props.isShowingSlidingBackdrop}>
                                <SlidingMenuItem text = {language.DarkMode}>
                                    <ToggleSwitch width = {80} height = {40} startToggled = {theme.name === 'dark'} toggleAction = {
                                        (value: boolean) => theme.toggleTheme(value)}
                                    >
                                    </ToggleSwitch>
                                </SlidingMenuItem>
                                <SlidingMenuItem text = {language.Language}>
                                    <ToggleSwitch width = {80} height = {40} startToggled = {language.LangCode === 'DE'} toggledOffText = {"EN"} toggledOnText = {"DE"} toggleAction = {
                                        (value: boolean) =>
                                        {
                                            language.toggleLanguage(value);
                                        }}
                                    >
                                    </ToggleSwitch>
                                </SlidingMenuItem>
                            </SlidingMenu>

                            <div>
                                <div
                                    className = "orange_slider"
                                    style = 
                                    {{
                                        backgroundColor: theme.colors.UIMainColor,
                                        height: "100%",
                                        width: "100%",
                                        position: "absolute",
                                        zIndex: 1,
                                        top: this.props.isShowingSlidingBackdrop ?  "0px" : "-100%",
                                        transition: `top ${BMStyle.HeaderSlideTransitionTime}`,
                                    }}
                                >
                                </div>
                            </div>

                            <div 
                                className = "left_justified_elements"
                                style = 
                                {{
                                    marginLeft: IsMobileWidth ? HEADER_ICON_MOBILE_WIDTH_MARGIN : HEADER_ICON_FULL_WIDTH_MARGIN,
                                    marginRight: "auto",
                                    flexDirection: "row",
                                    zIndex: 3,
                                }}
                            >
                                <HeaderIcon className = "icon-menu" onClick = {() => this.toggleExtendMenu()}></HeaderIcon>

                                <Link 
                                    style = 
                                    {{
                                        textDecoration: "none",
                                    }}
                                    to={BMStyle.HomePageLink}
                                >
                                    <h1 
                                        className = "name_in_header"
                                        style =
                                        {{
                                            color: "white",
                                            fontSize: "40px",
                                            fontFamily: BMStyle.UITitleFont,
                                            display: IsMobileWidth ? "none" : "inline",
                                            margin: "5px",
                                            opacity: this.props.isShowingSlidingBackdrop ? "1" : "0",
                                            transition: "opacity 0.7s",
                                        }}
                                    >
                                        Brad McCausland
                                    </h1>
                                </Link>
                            </div>

                            <div 
                                className = "right_justified_elements"
                                style = 
                                {{
                                    marginLeft: "auto",
                                    marginRight: IsMobileWidth ? HEADER_ICON_MOBILE_WIDTH_MARGIN : HEADER_ICON_FULL_WIDTH_MARGIN,
                                    flexDirection: "row",
                                    zIndex: 3,
                                }}
                            >
                                <HeaderIcon className = "icon-envelope" onClick = {() => window.open(BMStyle.MailToUrl, "_blank")}></HeaderIcon>
                                <HeaderIcon className = "icon-github" onClick = {() => window.open(BMStyle.GithubUrl, "_blank")}></HeaderIcon>
                                <HeaderIcon className = "icon-linkedin" onClick = {() => window.open(BMStyle.LinkedInUrl, "_blank")}></HeaderIcon>
                            </div>
                        </div>
                    )}
                    </BMStyle.StateContext.Consumer>
                )}
                </BMStyle.LanguageContext.Consumer>
            )}
            </BMStyle.ThemeContext.Consumer>
        )
    }
}