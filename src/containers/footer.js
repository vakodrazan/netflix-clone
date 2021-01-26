import React from 'react';
import { Footer } from '../components';

export default function FooterContainer() {
    return (
        <Footer>
            <Footer.Title>Question? Conteact us.</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">FAQs</Footer.Link>
                    <Footer.Link href="#">Investor Relastions</Footer.Link>
                    <Footer.Link href="#">Ways to watch</Footer.Link>
                    <Footer.Link href="#">Corporation Information</Footer.Link>
                    <Footer.Link href="#">Netflix Originals</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href="#">Help Center</Footer.Link>
                    <Footer.Link href="#">Jobs</Footer.Link>
                    <Footer.Link href="#">Terms of use</Footer.Link>
                    <Footer.Link href="#">Contact us</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href="#">Account</Footer.Link>
                    <Footer.Link href="#">Reedem gift cards</Footer.Link>
                    <Footer.Link href="#">Privacy</Footer.Link>
                    <Footer.Link href="#">Speed test</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href="#">Media Center</Footer.Link>
                    <Footer.Link href="#">Buy gift cards</Footer.Link>
                    <Footer.Link href="#">Cookies preferences</Footer.Link>
                    <Footer.Link href="#">Local notices</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break />
            <Footer.Text>Netflix Madagascar</Footer.Text>
        </Footer>
    )
}
