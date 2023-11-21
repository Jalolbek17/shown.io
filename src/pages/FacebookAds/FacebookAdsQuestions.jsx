import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'

function FacebookAdsQuestions() {
    return (
        <div>
            <div className="container">
                <div className="bat">
                    <div className="mid__title">
                        FAQs about <span className="mid__color">advertising platform</span>
                    </div>
                    <div className="mid__sub">
                        answers to your questions
                    </div>


                    <Accordion allowToggle paddingTop={'135px'} paddingBottom={'162px'}>
                        <AccordionItem >
                            <h1>
                                <AccordionButton className='bat__card-tit' backgroundColor={'inherit'} border={'none'} w={'100%'}>
                                    <span>01 </span>
                                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} w={'100%'}>
                                        <h1> What is an advertising platform </h1>
                                        <AccordionIcon w={'50px'} h={'50px'} />
                                    </Box>
                                </AccordionButton>
                            </h1>
                            <AccordionPanel className='bat__dot' pb={50}>
                                An advertising platform is a digital platform that allows advertisers to promote their products or services to a specific target audience through various advertising formats such as display ads, sponsored content, video ads, search ads, and more. Examples of popular advertising platforms include Facebook Ads, Google AdWords, Instagram Ads, Twitter Ads, and LinkedIn Ads.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h1>
                                <AccordionButton className='bat__card-tit' backgroundColor={'inherit'} borderLeft={'none'} borderRight={'none'} borderBottom={'none'} w={'100%'}>
                                    <span>02</span>
                                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} w={'100%'}>
                                        <h1>Why do we need an advertising platform</h1>
                                        <AccordionIcon w={'50px'} h={'50px'} />
                                    </Box>
                                </AccordionButton>
                            </h1>
                            <AccordionPanel className='bat__dot' pb={50}>
                                An advertising platform is essential in today's digital age as it enables businesses to reach their target audience effectively. By giving businesses the ability to create and optimize their ads on various channels, advertising platforms provide a flexible and measurable way to drive brand awareness, leads, and sales. Without advertising platforms, businesses may struggle to get their message across and reach their potential customers, resulting in missed opportunities and wasted marketing spend.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem  >
                            <h1>
                                <AccordionButton className='bat__card-tit' backgroundColor={'inherit'} borderLeft={'none'} borderRight={'none'} borderBottom={'none'} w={'100%'} >
                                    <span>03</span>
                                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} w={'100%'}>
                                        <h1>What are the benefits of an advertising platform</h1>
                                        <AccordionIcon w={'50px'} h={'50px'} />
                                    </Box>
                                </AccordionButton>
                                <AccordionPanel className='bat__dot' pt={40}>
                                    An advertising platform provides a central location for businesses to create, manage, and optimize their online advertising campaigns. The benefits of an advertising platform include the ability to reach a wider audience, increased brand awareness, improved targeting capabilities, and better reporting and analytics to measure the effectiveness of campaigns. It also allows businesses to streamline their advertising efforts and save time and resources by automating certain tasks.
                                </AccordionPanel>
                            </h1>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default FacebookAdsQuestions