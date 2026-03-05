<script lang="ts">
	const Counts = Array.from({ length: 31 }, (_, i) => i);
</script>

<!-- Inline SVG for folder icon, reusable via snippet -->
{#snippet folderIcon()}
<svg xmlns="http://www.w3.org/2000/svg" class="text-primary text-base inline-block me-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/></svg>
{/snippet}

<div id="structure" class="md:scroll-m-[130px] scroll-m-28">
	<h3 class="text-2xl font-semibold mt-8 text-white">Pacakge Structure</h3>
	<div class="rounded-md p-6 pt-3 border border-dark_border border-opacity-60 mt-6">
		<div class="flex items-center gap-4">
			<h5 class="text-base font-medium text-muted mt-3 mb-1">Crypgo Tailwind SvelteKit Template</h5>
		</div>
		<ul class="ps-0 md:ps-5 list-unstyled">
			<li class="py-2">
				<div class="flex items-center gap-3">
					<p class="text-xl text-white">|—</p>
					<span class="font-medium text-muted">
						{@render folderIcon()}
						packages
					</span>
				</div>
				<ul class="ps-5 md:ps-5 list-unstyled">
					<li class="py-0">
						<ul class="ps-2 ps-md-3 list-unstyled">
							<li class="py-2">
								<ul class="ps-0 md:ps-5 list-unstyled">
									<li class="py-2">
										<div class="flex items-center gap-3">
											<p class="text-xl text-white">|—</p>
											<span class="font-medium text-muted">
												{@render folderIcon()}
												markdown
											</span>
										</div>
									</li>
									<li class="py-2">
										<div class="flex items-center gap-3">
											<p class="text-xl text-white">|—</p>
											<span class="font-medium text-muted">
												{@render folderIcon()}
												static
											</span>
										</div>
									</li>
									<li class="py-2">
										<div class="flex items-center gap-3">
											<p class="text-xl text-white">|—</p>
											<span class="font-medium text-muted">
												{@render folderIcon()}
												src
											</span>
										</div>
										<div class="flex">
											<div class="flex flex-col justify-between gap-2 mt-2">
												{#each Counts.slice(0, 22) as _}
													<p class="text-xl text-white">|</p>
												{/each}
											</div>
											<ul class="ps-5 md:ps-12 list-unstyled">
												<li class="py-2">
													<div class="flex items-center gap-3">
														<p class="text-xl text-white">|—</p>
														<span class="font-medium text-muted">
															{@render folderIcon()}
															routes
														</span>
													</div>
													<div class="flex">
														<div class="flex flex-col justify-between gap-2 mt-2">
															{#each Counts.slice(0, 16) as _}
																<p class="text-xl text-white">|</p>
															{/each}
														</div>
														<ul class="ps-5 md:ps-12 list-unstyled">
															<li class="py-2">
																<div class="flex items-center gap-3">
																	<p class="text-xl text-white">|—</p>
																	<span class="font-medium text-muted">
																		{@render folderIcon()}
																		(auth)
																	</span>
																	<span class="fs-9 text-muted ms-4">(Contains auth pages)</span>
																</div>
																<div class="flex">
																	<div class="flex flex-col justify-between gap-2 mt-2">
																		{#each Counts.slice(0, 5) as _}
																			<p class="text-xl text-white">|</p>
																		{/each}
																	</div>
																	<ul class="ps-5 md:ps-12 list-unstyled">
																		<li class="py-2">
																			<div class="flex items-center gap-3">
																				<p class="text-xl text-white">|—</p>
																				<span class="font-medium text-muted">
																					{@render folderIcon()}
																					signin
																				</span>
																			</div>
																		</li>
																		<li class="py-2">
																			<div class="flex items-center gap-3">
																				<p class="text-xl text-white">|—</p>
																				<span class="font-medium text-muted">
																					{@render folderIcon()}
																					signup
																				</span>
																			</div>
																		</li>
																	</ul>
																</div>
															</li>
															<li class="py-2">
																<div class="flex items-center gap-3">
																	<p class="text-xl text-white">|—</p>
																	<span class="font-medium text-muted">
																		{@render folderIcon()}
																		documentation
																	</span>
																</div>
															</li>
															<li class="py-2">
																<div class="flex items-center gap-3">
																	<p class="text-xl text-white">|—</p>
																	<span class="font-medium text-muted">+layout.svelte</span>
																</div>
															</li>
															<li class="py-2">
																<div class="flex items-center gap-3">
																	<p class="text-xl text-white">|—</p>
																	<span class="font-medium text-muted">+page.svelte</span>
																</div>
															</li>
															<li class="py-2">
																<div class="flex items-center gap-3">
																	<p class="text-xl text-white">|—</p>
																	<span class="font-medium text-muted">+error.svelte</span>
																</div>
															</li>
														</ul>
													</div>
												</li>
												<li class="py-2">
													<div class="flex items-center gap-3">
														<p class="text-xl text-white">|—</p>
														<span class="font-medium text-muted">
															{@render folderIcon()}
															lib
														</span>
													</div>
													<div class="flex">
														<div class="flex flex-col justify-between gap-2 mt-2">
															{#each Counts.slice(0, 5) as _}
																<p class="text-xl text-white">|</p>
															{/each}
														</div>
														<ul class="ps-5 md:ps-12 list-unstyled">
															<li class="py-2">
																<div class="flex items-center gap-3">
																	<p class="text-xl text-white">|—</p>
																	<span class="font-medium text-muted">
																		{@render folderIcon()}
																		components
																	</span>
																	<span class="fs-9 text-muted ms-4">(All the Components of this template.)</span>
																</div>
															</li>
															<li class="py-2">
																<div class="flex items-center gap-3">
																	<p class="text-xl text-white">|—</p>
																	<span class="font-medium text-muted">
																		{@render folderIcon()}
																		stores
																	</span>
																</div>
															</li>
															<li class="py-2">
																<div class="flex items-center gap-3">
																	<p class="text-xl text-white">|—</p>
																	<span class="font-medium text-muted">
																		{@render folderIcon()}
																		data
																	</span>
																</div>
															</li>
															<li class="py-2">
																<div class="flex items-center gap-3">
																	<p class="text-xl text-white">|—</p>
																	<span class="font-medium text-muted">
																		{@render folderIcon()}
																		types
																	</span>
																</div>
															</li>
															<li class="py-2">
																<div class="flex items-center gap-3">
																	<p class="text-xl text-white">|—</p>
																	<span class="font-medium text-muted">
																		{@render folderIcon()}
																		utils
																	</span>
																</div>
															</li>
														</ul>
													</div>
												</li>
												<li class="py-2">
													<div class="flex items-center gap-3">
														<p class="text-xl text-white">|—</p>
														<span class="font-medium text-muted">app.html</span>
													</div>
												</li>
												<li class="py-2">
													<div class="flex items-center gap-3">
														<p class="text-xl text-white">|—</p>
														<span class="font-medium text-muted">app.css</span>
													</div>
												</li>
											</ul>
										</div>
									</li>
									<li class="py-2">
										<div class="flex items-center gap-3">
											<p class="text-xl text-white">|—</p>
											<span class="font-medium text-muted">
												<i class="ti ti-file me-2 text-primary font-bold"></i>
												svelte.config.js
											</span>
										</div>
									</li>
									<li class="py-2">
										<div class="flex items-center gap-3">
											<p class="text-xl text-white">|—</p>
											<span class="font-medium text-muted">
												<i class="ti ti-file me-2 text-primary font-bold"></i>
												postcss.config.mjs
											</span>
										</div>
									</li>
									<li class="py-2">
										<div class="flex items-center gap-3">
											<p class="text-xl text-white">|—</p>
											<span class="font-medium text-muted">
												<i class="ti ti-file me-2 text-primary font-bold"></i>
												package.json
											</span>
										</div>
									</li>
									<li class="py-2">
										<div class="flex items-center gap-3">
											<p class="text-xl text-white">|—</p>
											<span class="font-medium text-muted">
												<i class="ti ti-file me-2 text-primary font-bold"></i>
												tailwind.config.ts
											</span>
										</div>
									</li>
									<li class="py-2">
										<div class="flex items-center gap-3">
											<p class="text-xl text-white">|—</p>
											<span class="font-medium text-muted">
												<i class="ti ti-file me-2 text-primary font-bold"></i>
												tsconfig.json
											</span>
										</div>
									</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</div>
