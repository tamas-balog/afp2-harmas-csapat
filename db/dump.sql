--
-- PostgreSQL database dump
--

-- Dumped from database version 12.3 (Debian 12.3-1.pgdg100+1)
-- Dumped by pg_dump version 12.3 (Debian 12.3-1.pgdg100+1)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: algorithms; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.algorithms (
    id bigint NOT NULL,
    description character varying(255),
    name character varying(255)
);


ALTER TABLE public.algorithms OWNER TO postgres;

--
-- Name: customers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customers (
    id bigint NOT NULL,
    comments character varying(255),
    first_name character varying(255),
    last_name character varying(255),
    phone_number character varying(255),
    postal_code integer NOT NULL,
    street character varying(255),
    street_number integer NOT NULL
);


ALTER TABLE public.customers OWNER TO postgres;

--
-- Name: hibernate_sequence; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.hibernate_sequence OWNER TO postgres;

--
-- Name: ingredients; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ingredients (
    id bigint NOT NULL,
    name character varying(255)
);


ALTER TABLE public.ingredients OWNER TO postgres;

--
-- Name: order_pizza; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.order_pizza (
    id bigint NOT NULL,
    prepared boolean NOT NULL,
    order_id bigint,
    pizza_id bigint
);


ALTER TABLE public.order_pizza OWNER TO postgres;

--
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    id bigint NOT NULL,
    delivered boolean NOT NULL,
    customer_id bigint,
    employee_id bigint
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- Name: pizza_ingredient; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pizza_ingredient (
    pizza_id bigint NOT NULL,
    ingredient_id bigint NOT NULL
);


ALTER TABLE public.pizza_ingredient OWNER TO postgres;

--
-- Name: pizzas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pizzas (
    id bigint NOT NULL,
    name character varying(255),
    price integer NOT NULL
);


ALTER TABLE public.pizzas OWNER TO postgres;

--
-- Name: schedulers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.schedulers (
    id bigint NOT NULL,
    chosen integer
);


ALTER TABLE public.schedulers OWNER TO postgres;

--
-- Name: staff; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.staff (
    id bigint NOT NULL,
    email character varying(255),
    first_name character varying(255),
    last_name character varying(255),
    password character varying(255),
    phone_number character varying(255),
    position_code integer NOT NULL
);


ALTER TABLE public.staff OWNER TO postgres;

--
-- Data for Name: algorithms; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.algorithms (id, description, name) FROM stdin;
\.


--
-- Data for Name: customers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.customers (id, comments, first_name, last_name, phone_number, postal_code, street, street_number) FROM stdin;
18	Vigyázz, a kutya harap!	Kata	Juhász	06704543336	3243	Kossuth Lajos utca	34
22	Éhes vagyok	Lajos	Kiss	06702345434	3456	Patak utca	8
26		Tamás	Nagy	06204564387	5534	Rákóczi utca	5
31	Írj egy viccet a doboz belsejébe!	Fanni	Jakab	06308573845	4556	Mátyás Király utca	45
34	Hagymát nem kérek	Ákos	Sándor	06703453454	4523	Patak út	1
37		Judit	Kovács	06204534526	3453	Pesti utca	12
41	Annyi ketchupot kérek plusszba, amennyit csak lehet.	Pál	Török	06205648956	2343	Fő utca	34
44	Csak csengess fel, nem kell feljönni.	Fanni	Eperjesi	06207458734	3300	Csíki Sándor út	15
47		Botond	Bognár	06305463456	4432	Havas utca	18
\.


--
-- Data for Name: ingredients; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ingredients (id, name) FROM stdin;
2	paradicsom
3	sajt
5	hagyma
6	pepperoni
9	szalámi
11	sonka
12	kukorica
\.


--
-- Data for Name: order_pizza; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.order_pizza (id, prepared, order_id, pizza_id) FROM stdin;
19	f	17	4
20	f	17	8
23	f	21	4
24	f	21	8
27	f	25	4
28	f	25	7
29	f	25	10
32	f	30	7
35	f	33	7
38	f	36	13
39	f	36	10
42	f	40	8
45	f	43	4
48	f	46	7
49	f	46	10
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders (id, delivered, customer_id, employee_id) FROM stdin;
17	f	18	\N
21	f	22	\N
25	f	26	\N
30	f	31	\N
33	f	34	\N
36	f	37	\N
40	f	41	\N
43	f	44	\N
46	f	47	\N
\.


--
-- Data for Name: pizza_ingredient; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pizza_ingredient (pizza_id, ingredient_id) FROM stdin;
4	2
4	3
7	2
7	5
7	6
7	3
8	2
8	5
8	3
10	2
10	9
10	3
13	2
13	11
13	12
13	3
\.


--
-- Data for Name: pizzas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pizzas (id, name, price) FROM stdin;
4	Margherita	1100
7	Castellomore	950
8	Cippoa	1100
10	Szalámis	1350
13	Cardinale	1400
\.


--
-- Data for Name: schedulers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.schedulers (id, chosen) FROM stdin;
1	1
\.


--
-- Data for Name: staff; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.staff (id, email, first_name, last_name, password, phone_number, position_code) FROM stdin;
14	admin@gmail.com	András	Admin	asmin	06205443255	1
15	szakacs@gmail.com	Szilvia	Szakács	szakacs	06203874534	2
16	szallito@gmail.com	Szilárd	Szállító	szallito	06304564564	3
\.


--
-- Name: hibernate_sequence; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.hibernate_sequence', 49, true);


--
-- Name: algorithms algorithms_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.algorithms
    ADD CONSTRAINT algorithms_pkey PRIMARY KEY (id);


--
-- Name: customers customers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (id);


--
-- Name: ingredients ingredients_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ingredients
    ADD CONSTRAINT ingredients_pkey PRIMARY KEY (id);


--
-- Name: order_pizza order_pizza_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_pizza
    ADD CONSTRAINT order_pizza_pkey PRIMARY KEY (id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: pizzas pizzas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pizzas
    ADD CONSTRAINT pizzas_pkey PRIMARY KEY (id);


--
-- Name: schedulers schedulers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.schedulers
    ADD CONSTRAINT schedulers_pkey PRIMARY KEY (id);


--
-- Name: staff staff_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.staff
    ADD CONSTRAINT staff_pkey PRIMARY KEY (id);


--
-- Name: pizzas uk_gaur0k08uw3nthv9wi4d1ja5b; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pizzas
    ADD CONSTRAINT uk_gaur0k08uw3nthv9wi4d1ja5b UNIQUE (name);


--
-- Name: pizza_ingredient fk2qqr3q85cf30et34951veluah; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pizza_ingredient
    ADD CONSTRAINT fk2qqr3q85cf30et34951veluah FOREIGN KEY (pizza_id) REFERENCES public.pizzas(id);


--
-- Name: pizza_ingredient fki44tgrobphugussbp1icfi5xp; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pizza_ingredient
    ADD CONSTRAINT fki44tgrobphugussbp1icfi5xp FOREIGN KEY (ingredient_id) REFERENCES public.ingredients(id);


--
-- Name: orders fkpxtb8awmi0dk6smoh2vp1litg; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT fkpxtb8awmi0dk6smoh2vp1litg FOREIGN KEY (customer_id) REFERENCES public.customers(id);


--
-- Name: order_pizza fkq1d534u6os9e0289upyb23exj; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_pizza
    ADD CONSTRAINT fkq1d534u6os9e0289upyb23exj FOREIGN KEY (pizza_id) REFERENCES public.pizzas(id);


--
-- Name: order_pizza fkqjlkqm2jah8asffn5smwrot4n; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_pizza
    ADD CONSTRAINT fkqjlkqm2jah8asffn5smwrot4n FOREIGN KEY (order_id) REFERENCES public.orders(id);


--
-- Name: orders fkrp68roiqlb65j3jqkvfkdmfb2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT fkrp68roiqlb65j3jqkvfkdmfb2 FOREIGN KEY (employee_id) REFERENCES public.staff(id);


--
-- PostgreSQL database dump complete
--

