<a class="project-item" href="{{ get_permalink($project->ID) }}">
    {!! get_the_post_thumbnail($project->ID, '2by1', ['class' => "project-item--image"]) !!}
    <p class="project-item--excerpt">{{ $project->post_excerpt }}</p>
    <h3 class="project-item--title">{{ $project->post_title}}</h3>
</a>