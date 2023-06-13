import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { defaultShipsCount, Mode } from '@components/ui/ships/ships';
import { GameOver } from '@pages/game/game';
import Layout from '@/layout/default/layout';
import { Loader } from '@/components/ui';

const HomePage = lazy(() => import('@pages/index/index'));
const GamePage = lazy(() => import('@pages/game/game'));
const LeaderboardPage = lazy(() => import('@pages/leaderboard/leaderboard'));
const ProfilePage = lazy(() => import('@pages/profile/profile'));
const SignInPage = lazy(() => import('@pages/signin/signin'));
const SignUpPage = lazy(() => import('@pages/signup/signup'));
const ErrorPage = lazy(() => import('@pages/error/error'));
const ForumPage = lazy(() => import('@pages/forum/forum'));
const ForumTopicPage = lazy(() => import('@pages/forum-topic/forum-topic'));

const Router = () => (
    <Routes>
        <Route element={<Layout />}>
            <Route element={<HomePage />} path="/home" />
            <Route element={<GamePage />} path="/game" />
            <Route
                element={<GamePage mode={Mode.placement} shipsCount={defaultShipsCount} />}
                path="/game/start"
            />
            <Route element={<GamePage gameOver={GameOver.win} />} path="/game/finish" />
            <Route element={<ProfilePage />} path="/profile" />
            <Route element={<LeaderboardPage />} path="/leaderboard/:page?" />
            <Route element={<ForumPage />} path="/forum/:page?" />
            <Route element={<ForumTopicPage />} path="/forum-topic/:topicId/:page?" />
        </Route>

        <Route element={<Layout showHeader={false} />}>
            <Route element={<HomePage />} path="/" />
            <Route element={<Loader />} path="/loader" />
            <Route element={<SignInPage />} path="/signin" />
            <Route element={<SignUpPage />} path="/signup" />
            <Route element={<ProfilePage section="edit" />} path="/profile/edit" />
            <Route element={<ProfilePage section="password" />} path="/profile/password" />
            <Route
                element={<ErrorPage code={500} message="Что-то поломалось. Но мы уже чиним" />}
                path="/500"
            />
            <Route element={<ErrorPage />} path="*" />
        </Route>
    </Routes>
);

export default Router;
