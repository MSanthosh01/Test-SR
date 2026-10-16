/**
 * @walnut_method
 * name: Generate unique Case subject
 * description: Generates a realistic unique Salesforce Case subject and stores it in the shared variable context.
 * actionType: custom_generate_case_subject
 * context: shared
 * needsLocator: false
 * category: data-generation
 */
import type { WalnutSharedContext } from "@walnut/sdk";

export async function generateCaseSubject(ctx: WalnutSharedContext): Promise<void> {
  const token = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
  const subject = `Customer support request - ${token}`;
  ctx.setVariable("caseSubject", subject);
  ctx.log(`Generated unique Case subject in variable caseSubject.`);
}
