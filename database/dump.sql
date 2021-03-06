--
-- PostgreSQL database dump
--

-- Dumped from database version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE ONLY public.users DROP CONSTRAINT users_pk;
ALTER TABLE ONLY public.lessons DROP CONSTRAINT lessons_pk;
ALTER TABLE ONLY public.field_trips DROP CONSTRAINT field_trips_pk;
ALTER TABLE ONLY public.courses DROP CONSTRAINT courses_pk;
ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pk;
ALTER TABLE public.users ALTER COLUMN "userId" DROP DEFAULT;
ALTER TABLE public.lessons ALTER COLUMN "lessonId" DROP DEFAULT;
ALTER TABLE public.field_trips ALTER COLUMN "fieldTripId" DROP DEFAULT;
ALTER TABLE public.courses ALTER COLUMN "courseId" DROP DEFAULT;
ALTER TABLE public.categories ALTER COLUMN "categoryId" DROP DEFAULT;
DROP SEQUENCE public."users_userId_seq";
DROP TABLE public.users_field_trips;
DROP TABLE public.users_courses;
DROP TABLE public.users;
DROP SEQUENCE public."lessons_lessonId_seq";
DROP TABLE public.lessons;
DROP SEQUENCE public."field_trips_fieldTripId_seq";
DROP TABLE public.field_trips_categories;
DROP TABLE public.field_trips;
DROP SEQUENCE public."courses_courseId_seq";
DROP TABLE public.courses;
DROP SEQUENCE public."categories_categoryId_seq";
DROP TABLE public.categories;
DROP EXTENSION plpgsql;
DROP SCHEMA public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.categories (
    "categoryId" integer NOT NULL,
    "categoryName" text NOT NULL
);


--
-- Name: categories_categoryId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."categories_categoryId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: categories_categoryId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."categories_categoryId_seq" OWNED BY public.categories."categoryId";


--
-- Name: courses; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.courses (
    "courseId" integer NOT NULL,
    name text NOT NULL,
    "categoryId" integer NOT NULL,
    description text NOT NULL
);


--
-- Name: courses_courseId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."courses_courseId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: courses_courseId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."courses_courseId_seq" OWNED BY public.courses."courseId";


--
-- Name: field_trips; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.field_trips (
    "fieldTripId" integer NOT NULL,
    "fieldTripName" text NOT NULL,
    description text NOT NULL,
    address text NOT NULL,
    city text NOT NULL,
    date text NOT NULL,
    "time" text NOT NULL
);


--
-- Name: field_trips_categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.field_trips_categories (
    "fieldTripId" integer NOT NULL,
    "categoryId" integer NOT NULL
);


--
-- Name: field_trips_fieldTripId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."field_trips_fieldTripId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: field_trips_fieldTripId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."field_trips_fieldTripId_seq" OWNED BY public.field_trips."fieldTripId";


--
-- Name: lessons; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.lessons (
    "lessonId" integer NOT NULL,
    "courseId" integer NOT NULL,
    name text NOT NULL,
    heading text NOT NULL,
    body text NOT NULL
);


--
-- Name: lessons_lessonId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."lessons_lessonId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: lessons_lessonId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."lessons_lessonId_seq" OWNED BY public.lessons."lessonId";


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    "userId" integer NOT NULL,
    name text NOT NULL
);


--
-- Name: users_courses; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users_courses (
    "courseId" integer NOT NULL,
    "userId" integer NOT NULL
);


--
-- Name: users_field_trips; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users_field_trips (
    "fieldTripId" integer NOT NULL,
    "userId" integer NOT NULL
);


--
-- Name: users_userId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."users_userId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_userId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."users_userId_seq" OWNED BY public.users."userId";


--
-- Name: categories categoryId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories ALTER COLUMN "categoryId" SET DEFAULT nextval('public."categories_categoryId_seq"'::regclass);


--
-- Name: courses courseId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.courses ALTER COLUMN "courseId" SET DEFAULT nextval('public."courses_courseId_seq"'::regclass);


--
-- Name: field_trips fieldTripId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.field_trips ALTER COLUMN "fieldTripId" SET DEFAULT nextval('public."field_trips_fieldTripId_seq"'::regclass);


--
-- Name: lessons lessonId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lessons ALTER COLUMN "lessonId" SET DEFAULT nextval('public."lessons_lessonId_seq"'::regclass);


--
-- Name: users userId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN "userId" SET DEFAULT nextval('public."users_userId_seq"'::regclass);


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.categories ("categoryId", "categoryName") FROM stdin;
1	Film
2	Art
3	Wellness
\.


--
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.courses ("courseId", name, "categoryId", description) FROM stdin;
1	Writing For Film	1	Don't let the seemingly endless parade of screenwriting elements intimidate you. This course will help you get a handle on them with an easy-to-follow format.
2	Video Production	1	There are three stages of video production: pre-production, production, and post-production. This course takes you through all three stages so you can plan your video projects like a pro.
3	Sound Design	1	The art and practice of creating sound tracks for a variety of needs.
4	Art History	2	With this course, you will gain an understanding of the various artistic movements that have shaped out world today and the historical influences behind them.
6	Painting in Quarantine for Beginners	2	It's lonely up in here. Let out your feelings with this this beginners course to painting in self-isolation.
7	Meditation 101	3	Learn to chill. Take deep breaths. Train your brain to give energy to the thoughts that are helpful and let go of the thoughts that are just trash.
5	Graphic Design	2	Learn digital graphic design.
8	The Mind/Body Connection	3	Learn how the mind and body are interconnected, how they affect each other, and why it's important to address them holistically.
9	Writing for TV	1	This is the golden age of television. Learn to tell a story in a half hour or hour-long format made for cable or betwork television.
10	Funding Your Film	1	Learn the various ways you can raise money for your indie film.
\.


--
-- Data for Name: field_trips; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.field_trips ("fieldTripId", "fieldTripName", description, address, city, date, "time") FROM stdin;
1	Trivia Night / Study Group	Let's study for the Film 101 exam with a trivia night! Test your knowledge. Take lots of notes. And haaaave fun!	2930 Bristol St b102	Costa Mesa	04/04/20	12:00pm
2	Rooftop Film Festival	Enjoy a 12-hour festival of our favorite Sci-Fi films. BYOB and BYOC - Bring your own chair!	305 E 4th St #100	Santa Ana	06/21/20	3:00pm
3	Beer Yoga	This is for anyone who is interested in Yoga, craft beer, meeting new people, having a great time while exercising and joining the community! You don't have to pre-register. Just show up! No experience is needed. We even have mats for you to borrow! We have LOTS of different breweries as our hosts so you can try them all!	3630 Atlantic Ave	Long Beach	12/15/20	12:30pm
4	Museum Day	Let's get ~cultured~. Everyone can meet up at the Broad for a group museum day where we can check out some art, talk about how class is going, and get to know one another.	221 S Grand Ave	Los Angeles	09/19/20	11:00am
5	Dinner + Movie Meet Up	Optional pre-movie food @ Luna Grill. Luna Grill is fast casual Mediterranean. We can say hi, talk about good films, and meet new people.\r\n\r\n"Dark Waters @ Regal Edwards @ 7:15.\r\n\r\nRegal Edwards Westpark\r\n3735 Alton Pkwy. Irvine, CA 92606\r\n\r\n94% audience Rotten Tomatoes\r\n91% critics Rotten Tomatoes\r\n\r\nMovie starts at 7:15, but there's 20 minutes of trailers, so film actually starts at 7:35. Dark Waters is 2 hr and 6 minutes, so estimated exit time is 9:30pm.	Alton Pkwy Suite B.	Irvine	07/03/20	5:00pm
6	Drink and Draw	Basically we're just going to hangout eating/drinking, while working on our own creative project. Doesn't matter if it's for work or just something personal. I like this group to be open for everyone.	225 N Broadway,	Santa Ana	08/14/20	7:00pm
7	Art History Study Group	We can meet at Barnes & Noble to study, the go to the Art Walk down the street when it starts. We can discuss class or just art in general. See you there!	1436 Barranca Pkwy	Irvine	06/20/20	3:00pm
8	Trivia Night 2	Test your knowledge for the Film 101 exam with a trivia night!  Take lots of notes. And haaaave fun!	6767 Red Hill Ave	Irvine	10/12/20	7:00pm
9	Film Study Sesh	Exam study time with a trivia night! Test your knowledge. Take lots of notes. And haaaave fun!	241 17th St	Costa Mesa	10/18/20	5:00pm
10	Meditation Study Sesh	Let's meet Barnes & Noble to study, then go take a meditation class at the Wellness center across the street. See you there!	2365 Pacific Coast Hwy	Huntington Beach	11/05/20	3:30pm
11	Mind/Body Day Retreat	A day-long retreat in the desert where we use the healing practices we learned in class to practice on ourselves and each other.	123 Broadway St	Palm Springs	07/18/20	10:00am
12	Hike & Learn	We will go on a hike in South County, bring some picnic foods, and learn more about health and wellness. Bring suscreen and some snacks. We willprovide the main course for lunch. Also bring plenty of water!	489 Pacific Coast Hwy	Newport	08/16/20	11:30am
13	Art & Design Lunch & Learn	We're meeting at an artsy place where we will contemplate good design while eating delicious food provided by the host. Wine provided. Bring your dog in a bag. Dress well.	958 Grand Ave	Los Angeles	09/29/20	12:30pm
14	Picnic Creation @ Fairview Park	Let's meet up, go for a walk around the bluffs to center ourselves, talk about creation, get to know each other, find a cozy spot on the grass, lay out the blanket and snacks and art supplies and get some good content creation in in the afternoon sun/shade.\r\n\r\nNo wifi here. Let's connect.	2501 Placentia Ave	Costa Mesa	11/02/20	11:00am
\.


--
-- Data for Name: field_trips_categories; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.field_trips_categories ("fieldTripId", "categoryId") FROM stdin;
1	1
2	1
3	3
4	2
5	1
6	2
7	2
8	1
9	1
10	3
11	3
12	3
13	2
14	2
\.


--
-- Data for Name: lessons; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.lessons ("lessonId", "courseId", name, heading, body) FROM stdin;
1	1	Fundamentals	The main points:	One minute of a movie should translate to roughly one page in a screenplay.
2	1	Setting the Scene	Establishing shots:	Let your audience know where the scene takes place, first by establishing the city, with a landscape shot. From there, establish the street, building, or room we will meet our characters in.
3	1	Natural Dialogue	Let it flow:	Just because someone said something in real life doesn't necessarily mean it'll make for good screenplay dialogue.
4	1	Plot Structure	Every story has three things:	1. A beginning 2. A middle 3. An end
5	1	Characterization	Well rounded characters:	What is your character's motivation? How might you be able to show that through action and dialogue?
6	2	Pre-Production	Pre-Production	Pre-production involves all of the planning aspects of the video production process before filming begins. This includes scriptwriting, scheduling, logistics, and other administrative duties.
7	2	Production	Production	Production is the phase of video production which captures the video content (moving images / videography) and involves filming the subject(s) of the video.
8	2	Post-Production	Post-Production	Post-production is the action of selectively combining those video clips through video editing into a finished product that tells a story or communicates a message in either a live event setting (live production), or after an event has occurred (post-production).
9	3	The Basics	What is sound design?	Sound design is the art and practice of creating sound tracks for a variety of needs. It involves specifying, acquiring or creating auditory elements using audio production techniques and tools. It is employed in a variety of disciplines including filmmaking, television production, video game development, theatre, sound recording and reproduction, live performance, sound art, post-production, radio and musical instrument development.
10	3	How it Started	The History of Sound Design	The use of sound to evoke emotion, reflect mood and underscore actions in plays and dances began in prehistoric times. At its earliest, it was used in religious practices for healing or recreation. In ancient Japan, theatrical events called kagura were performed in Shinto shrines with music and dance.[
11	3	Digital Sound	Digital Sound Design	MIDI and digital audio technology have contributed to the evolution of sound production techniques in the 1980s and 1990s. Digital audio workstations and a variety of digital signal processing algorithms applied in them allow more complicated sound tracks with more tracks as well as auditory effects to be realized.
12	4	History of Art	The Beginning	Art history is the study of objects of art in their historical development and stylistic contexts; that is genre, design, format, and style. The study includes painting, sculpture, architecture, ceramics, furniture, and other decorative objects.
13	4	Methodologies	Context matters.	Art historians often examine work in the context of its time. At best, this is done in a manner which respects its creator's motivations and imperatives; with consideration of the desires and prejudices of its patrons and sponsors; with a comparative analysis of themes and approaches of the creator's colleagues and teachers; and with consideration of iconography and symbolism. 
14	4	Feminist Art	Modern Feminist Art	While feminist art history can focus on any time period and location, much attention has been given to the Modern era. Some of this scholarship centers on the feminist art movement, which referred specifically to the experience of women. 
15	5	Digital Product Design	An iterative design process	Digital product design is an iterative design process used to solve a functional problem with a formal solution. A digital product designer identifies an existing problem, offers the best possible solution, and launches it to a market that demonstrates demand for the particular solution.
16	5	Typography	What is Typography?	Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed. 
17	5	Animation	Animate!	Animation is a method in which pictures are manipulated to appear as moving images. In traditional animation, images are drawn or painted by hand on transparent celluloid sheets to be photographed and exhibited on film. 
18	6	Painting Feelings	It's going to be ok.	Paint like no-one is watching! Wear an apron so you don't mess up your PJs. Open a window because paint stinks. Then paaiiint.
19	6	Live Painting	How to use Zoom to paint live.	Live painting is a form of visual performance art, in which artists complete a visual art piece in a public performance, often at a bar, music concert, wedding reception, or public event, accompanied by a DJ or live music. The artwork which is created live may be planned or improvisational.
20	6	Still Life	Still life is only fun to paint in quarantine.	Grab a pear and paint the shapes it makes. Fun, right?
21	7	Why Meditation?	Don't Hate, Meditate	Meditation helps you control your feelings because the deep breathing helps to calm your nervous system.
22	7	How to Beathe	Breathing Techniques	"Ocean Breath" is when you close the back of your throat and audibly exhale so it sounds like you're mimicking the ocean. This vibrates your vagus nerve at the back of your throat, which activates the parasympathetic nervous system and calms you down.
23	7	Mindfulness	Think a Thought, Then Let it Go	You don't have to take every thought you have so seriously. The human brain comes up with crazy things. Most situations aren't as bad as they seem in your head.
24	8	How the Mind Works	Lorem Ipsum	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
25	8	How the Body Works	Lorem Ipsum	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
26	8	The Science of Thinking	Lorem Ipsum	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
27	9	Writing for Network TV	Lorem Ipsum	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
28	9	Writing for Cable TV	Lorem Ipsum	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
29	9	Teleplay Best Practices	Lorem Ipsum	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
30	10	Film Budgeting	Lorem Ipsum	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
31	10	Finding Investors for Your Film	Lorem Ipsum	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
32	10	Using GoFundMe	Lorem Ipsum	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users ("userId", name) FROM stdin;
1	Melissa
2	Cindy
\.


--
-- Data for Name: users_courses; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users_courses ("courseId", "userId") FROM stdin;
1	1
2	1
3	1
4	1
5	1
1	2
7	2
8	2
9	2
10	2
\.


--
-- Data for Name: users_field_trips; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users_field_trips ("fieldTripId", "userId") FROM stdin;
1	1
2	1
3	1
4	2
10	2
11	2
\.


--
-- Name: categories_categoryId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."categories_categoryId_seq"', 1, false);


--
-- Name: courses_courseId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."courses_courseId_seq"', 1, false);


--
-- Name: field_trips_fieldTripId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."field_trips_fieldTripId_seq"', 35, true);


--
-- Name: lessons_lessonId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."lessons_lessonId_seq"', 1, false);


--
-- Name: users_userId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."users_userId_seq"', 1, false);


--
-- Name: categories categories_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pk PRIMARY KEY ("categoryId");


--
-- Name: courses courses_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_pk PRIMARY KEY ("courseId");


--
-- Name: field_trips field_trips_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.field_trips
    ADD CONSTRAINT field_trips_pk PRIMARY KEY ("fieldTripId");


--
-- Name: lessons lessons_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lessons
    ADD CONSTRAINT lessons_pk PRIMARY KEY ("lessonId");


--
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY ("userId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

