import React from "react"
import { Page, Header, HeaderTitle, Body } from "blue-react"

import { appLogo, appTitle, getPhrase } from "../shared"

function HomePage() {
    return (
        <Page>
            <Header>
                <HeaderTitle logo={appLogo} appTitle={appTitle}>HomePage</HeaderTitle>
            </Header>

            <Body containerClass="container">
                <h1 className="mt-4 mb-3">{getPhrase("HELLO_WORLD")}</h1>

                <button
                    className="btn btn-lg btn-primary"
                    onClick={() => alert(getPhrase("HELLO_WORLD"))}
                >
                    Why don't you click this
                    </button>
            </Body>
        </Page>
    )
}

export default HomePage