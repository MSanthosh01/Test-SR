/**
 * @walnut_method
 * name: Generate unique Case comments
 * description: Generates realistic resolution-ready Salesforce Case comments and stores them in the shared variable context.
 * actionType: custom_generate_case_comments
 * context: shared
 * needsLocator: false
 * category: data-generation
 */
import type { WalnutSharedContext } from "@walnut/sdk";

export async function generateCaseComments(ctx: WalnutSharedContext): Promise<void> {
  const token = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
  const comments = `Customer contacted support regarding a service issue. Troubleshooting was completed and the resolution was confirmed with the customer. Reference: ${token}.`;
  ctx.setVariable("caseComments", comments);
  ctx.log(`Generated unique Case comments in variable caseComments.`);
}
