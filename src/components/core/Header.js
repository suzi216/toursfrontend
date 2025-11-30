import DiscoverAlbaniaLogo from './Logo'


const navigation = {

    pages: [
        { name: 'Home', href: '/' },
        { name: 'Find tours', href: 'tours' },
        { name: 'Contact', href: 'contact' },
    ],
}

export default function Header() {

    return (
        <>
            <header className="mb-2 bg-white">

                <nav aria-label="Top" className="mx-aut px-2 sm:px-6 lg:px-8">

                    <div className="border-gray-200">

                        <div className="flex justify-between">

                            <div className="lg:block lg:self-stretch">

                                <div className="flex h-full space-x-8">
                                    <DiscoverAlbaniaLogo />

                                </div>
                            </div>

                            <div className="flex flex-col items-center  w-full">
                                <div className="flex w-full items-center justify-end w-full h-full ">
                                    {navigation.pages.map((page) => (
                                        <a
                                            key={page.name}
                                            href={page.href}
                                            className="px-2 text-14 lg:text-2xl "
                                        >
                                            {page.name}
                                        </a>
                                    ))}
                                    <a
                                        href="/tour/new"
                                        className="px-2 text-14 lg:text-2xl "
                                    >
                                        Add Tours
                                    </a>
                                </div>


                            </div>
                        </div>
                    </div>

                </nav>

            </header>
        </>
    )
}