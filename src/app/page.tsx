"use client";

import React from 'react';

import { Heading, Text, Flex, Button, Grid, Icon, InlineCode, Logo, Background, LetterFx, SparkleFx, GlitchFx, Arrow, } from '@/once-ui/components';
import Link from 'next/link';

export default function Home() {
	const links = [
		{
			href: "https://once-ui.com/docs/theming",
			title: "Experience",
			description: "Style your app in minutes.",
		},
		{
			href: "https://once-ui.com/docs/flexComponent",
			title: "Projects",
			description: "Build responsive layouts.",
		},
		{
			href: "https://once-ui.com/docs/typography",
			title: "Get in touch",
			description: "Scale text automatically.",
		},
	];

	return (
		<Flex
			fillWidth paddingTop="l" paddingX="l"
			direction="column" alignItems="center" flex={1}>
			<Flex
				position="relative"
				as="section" overflow="hidden"
				fillWidth minHeight="0" maxWidth={68}
				direction="column" alignItems="center" flex={1}>
				<Flex
					as="main"
					direction="column" justifyContent="center"
					fillWidth fillHeight padding="l" gap="l">
					<Flex
						mobileDirection="column"
						fillWidth gap="12">
						<Flex
							position="relative"
							flex={2} paddingTop="56" paddingX="xl">
							<GlitchFx
  							speed="fast"
  							interval={120}
  							trigger="hover"
							 style={{
								zIndex: 0, // Set SparkleFx behind the image
							}}
							>	
							<img src="images/IMG_3417.png" // replace with the actual path to your image 
							alt="Eduardo Profile" 
							style={{ 
								width: '150px',        // Adjust as needed for your layout
								height: '150px',       // Match width for a circular crop
								borderRadius: '50%',   // Makes the image circular
								objectFit: 'cover',    // Ensures the image fills the circular area
								opacity: '0.8',        // Adjust opacity as needed
								transition: 'opacity 0.3s', // Smooth transition for hover effect 
								zIndex: 1,             // Ensure the image appears above SparkleFx
								position: 'relative',  // Ensure the image stays in the Flex layout
								}}
								onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
								onMouseLeave={(e) => e.currentTarget.style.opacity = '0.6'}
								/></GlitchFx>
						</Flex>
						<Flex
							position="relative"
							flex={4} gap="24" marginBottom="104"
							direction="column">
							<InlineCode
								className="shadow-m"
								style={{
									width: 'fit-content',
									padding: 'var(--static-space-8) var(--static-space-16)',
									backdropFilter: 'blur(var(--static-space-1))'}}>
								Start by editing <span className="brand-on-background-medium">app/page.tsx</span>
							</InlineCode>
							<Heading
								wrap="balance"
								variant="display-strong-s">
								<span className="font-code brand-on-background-medium">
									<LetterFx
										trigger="hover"
										>
										Eduardo Belluti
									</LetterFx>
								</span>
							</Heading>
							<h2 className="font-code" style={{ textAlign: 'left', margin: '0px 0' }}>Product Design, California</h2> {/* Title added below the Heading */}
							 {/* New paragraph added here */}
    				<p className="font-code"  style={{ textAlign: 'left', margin: '0,0' }}>
        I'm an experienced individual contributor designer with over a decade of expertise in SF Bay Area startups. 
        </p>

		<p className="font-code"  style={{ textAlign: 'left', margin: '0,0' }}>
        Originally hailing from the business, education, and service hub of Southeast Brazil, I ventured to California for college and have joyfully called it home for the past two decades.</p>
    
							<Button
								id="readDocs"
								href="https://once-ui.com/docs"
								variant="secondary"
								className="mt-16">
								<Flex alignItems="center">
									Read more
									<Arrow trigger="#readDocs"/>
								</Flex>
							</Button>
						</Flex>
					</Flex>
					<Grid
						radius="l"
						border="brand-medium"
						borderStyle="solid-1"
						columns="repeat(3, 1fr)"
						tabletColumns="1col"
						mobileColumns="1col"
						fillWidth>
						{links.map((link) => (
							<Link
								target="_blank"
								style={{ padding: 'var(--responsive-space-l)' }}
								key={link.href}
								href={link.href}>
								<Flex
									fillWidth paddingY="8" gap="8"
									direction="column">
									<Flex
										fillWidth gap="12"
										alignItems="center">
										<Text
											variant="body-strong-m" onBackground="neutral-strong">
											{link.title}
										</Text>
										<Icon size="s" name="arrowUpRight" />
									</Flex>
									<Text
										variant="body-default-s" onBackground="neutral-weak">
										{link.description}
									</Text>
								</Flex>
							</Link>
						))}
					</Grid>
				</Flex>
			</Flex>
			<Flex
				as="footer"
				position="relative"
				fillWidth paddingX="l" paddingY="m"
				justifyContent="space-between">
				<Text
					variant="body-default-s" onBackground="neutral-weak">
					© 2024 Once UI, <Link href="https://github.com/once-ui-system/nextjs-starter?tab=MIT-1-ov-file">MIT License</Link>
				</Text>
				<Flex
					gap="12">
					<Button
						href="mailto:edbelluti@gmail.com"
						prefixIcon="Envelope" size="s" variant="tertiary">
						Contact
					</Button>
					<Button
						href="https://www.linkedin.com/in/edbelluti/"
						prefixIcon="MiniIdentification" size="s" variant="tertiary">
						Linkedin
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
}
