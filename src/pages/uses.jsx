import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Spencer Sharp</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro, M1 Max, 32GB RAM (2021)">
              I was using an Intel-based 16” MacBook Pro prior to this and the
              difference is night and day. I’ve never heard the fans turn on a
              single time, even under the incredibly heavy loads I put it
              through with our various launch simulations.
            </Tool>
            <Tool title="Ergodox Planck">
              I use this keyboard for everything. It’s a 40% keyboard with a lot of configuration.
              Makes me very productive and fast at typing while minimizing hand strain.
            </Tool>
            <Tool title="Apple Magic Trackpad">
              Something about all the gestures makes me feel like a wizard with
              special powers. I really like feeling like a wizard with special
              powers.
            </Tool>
            <Tool title="Secret Lab Chair">
              If I’m going to slouch in the worst ergonomic position imaginable
              all day, I might as well do it in an expensive chair.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Neovim">
              I love simplicity and tools that match the way I think and work.
              Neovim is doing that very well, and I’m very happy with it.
            </Tool>
            <Tool title="Alacritty">
              I work a lot in my terminal and since I use Neovim, I want my terminal to be fast.
              Alacritty is the fastest terminal emulator I’ve ever used.
            </Tool>
            <Tool title="Graphite">
              Awesome tool to handle stacked pull requests (stacked diffs) in Git. Allows me to work
              fast and not get stuck waiting for reviews.
            </Tool>
            <Tool title="Lazygit">
              To do stuff with git easily.
            </Tool>
            <Tool title="Lazydocker">
              To do stuff with docker easily.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Raycast">
              I use Raycast to quickly access all the tools I use on a daily basis.
            </Tool>
            <Tool title="Mem">
              Mem is the tool of choice I use to take notes.
            </Tool>
            <Tool title="Cron">
              Great calendar application that has all the features I need.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
