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
ALTER TABLE public.users_field_trips ALTER COLUMN "userId" DROP DEFAULT;
ALTER TABLE public.users_field_trips ALTER COLUMN "fieldTripId" DROP DEFAULT;
ALTER TABLE public.users_courses ALTER COLUMN "userId" DROP DEFAULT;
ALTER TABLE public.users_courses ALTER COLUMN "courseId" DROP DEFAULT;
ALTER TABLE public.users ALTER COLUMN "userId" DROP DEFAULT;
ALTER TABLE public.lessons ALTER COLUMN "courseId" DROP DEFAULT;
ALTER TABLE public.lessons ALTER COLUMN "lessonId" DROP DEFAULT;
ALTER TABLE public.field_trips ALTER COLUMN "fieldTripId" DROP DEFAULT;
ALTER TABLE public.courses ALTER COLUMN "courseId" DROP DEFAULT;
ALTER TABLE public.categories ALTER COLUMN "categoryId" DROP DEFAULT;
DROP SEQUENCE public."users_userId_seq";
DROP SEQUENCE public."users_field_trips_userId_seq";
DROP SEQUENCE public."users_field_trips_fieldTripId_seq";
DROP TABLE public.users_field_trips;
DROP SEQUENCE public."users_courses_userId_seq";
DROP SEQUENCE public."users_courses_courseId_seq";
DROP TABLE public.users_courses;
DROP TABLE public.users;
DROP SEQUENCE public."lessons_lessonId_seq";
DROP SEQUENCE public."lessons_courseId_seq";
DROP TABLE public.lessons;
DROP SEQUENCE public."field_trips_fieldTripId_seq";
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
    "categoryId" text NOT NULL,
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
    date date NOT NULL,
    "time" time with time zone NOT NULL,
    categoryid text NOT NULL
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
-- Name: lessons_courseId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."lessons_courseId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: lessons_courseId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."lessons_courseId_seq" OWNED BY public.lessons."courseId";


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
-- Name: users_courses_courseId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."users_courses_courseId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_courses_courseId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."users_courses_courseId_seq" OWNED BY public.users_courses."courseId";


--
-- Name: users_courses_userId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."users_courses_userId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_courses_userId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."users_courses_userId_seq" OWNED BY public.users_courses."userId";


--
-- Name: users_field_trips; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users_field_trips (
    "fieldTripId" integer NOT NULL,
    "userId" integer NOT NULL
);


--
-- Name: users_field_trips_fieldTripId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."users_field_trips_fieldTripId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_field_trips_fieldTripId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."users_field_trips_fieldTripId_seq" OWNED BY public.users_field_trips."fieldTripId";


--
-- Name: users_field_trips_userId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."users_field_trips_userId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_field_trips_userId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."users_field_trips_userId_seq" OWNED BY public.users_field_trips."userId";


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
-- Name: lessons courseId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lessons ALTER COLUMN "courseId" SET DEFAULT nextval('public."lessons_courseId_seq"'::regclass);


--
-- Name: users userId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN "userId" SET DEFAULT nextval('public."users_userId_seq"'::regclass);


--
-- Name: users_courses courseId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users_courses ALTER COLUMN "courseId" SET DEFAULT nextval('public."users_courses_courseId_seq"'::regclass);


--
-- Name: users_courses userId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users_courses ALTER COLUMN "userId" SET DEFAULT nextval('public."users_courses_userId_seq"'::regclass);


--
-- Name: users_field_trips fieldTripId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users_field_trips ALTER COLUMN "fieldTripId" SET DEFAULT nextval('public."users_field_trips_fieldTripId_seq"'::regclass);


--
-- Name: users_field_trips userId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users_field_trips ALTER COLUMN "userId" SET DEFAULT nextval('public."users_field_trips_userId_seq"'::regclass);


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
5	Painting	2	Banksy paint by numbers.
6	Painting in Quarantine for Beginners	2	It's lonely up in here. Let out your feelings with this this beginners course to painting in self-isolation.
7	Meditation 101	3	Learn to chill. Take deep breaths. Train your brain to give energy to the thoughts that are helpful and let go of the thoughts that are just trash.
\.


--
-- Data for Name: field_trips; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.field_trips ("fieldTripId", "fieldTripName", description, address, city, date, "time", categoryid) FROM stdin;
1	Trivia Night / Study Group	Let's study for the Film 101 exam with a trivia night! Test your knowledge. Take lots of notes. And haaaave fun!	2930 Bristol St b102	Costa Mesa	2020-04-04	18:00:00+00	1
2	Rooftop Film Festival	Enjoy a 12-hour festival of our favorite Sci-Fi films. BYOB and BYOC - Bring your own chair!	305 E 4th St #100	Santa Ana	2020-06-21	11:00:00+00	1
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
6	2
7	2
\.


--
-- Data for Name: users_field_trips; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users_field_trips ("fieldTripId", "userId") FROM stdin;
1	1
2	1
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

SELECT pg_catalog.setval('public."field_trips_fieldTripId_seq"', 1, false);


--
-- Name: lessons_courseId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."lessons_courseId_seq"', 1, false);


--
-- Name: lessons_lessonId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."lessons_lessonId_seq"', 1, false);


--
-- Name: users_courses_courseId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."users_courses_courseId_seq"', 1, false);


--
-- Name: users_courses_userId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."users_courses_userId_seq"', 1, false);


--
-- Name: users_field_trips_fieldTripId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."users_field_trips_fieldTripId_seq"', 1, false);


--
-- Name: users_field_trips_userId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."users_field_trips_userId_seq"', 1, false);


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

