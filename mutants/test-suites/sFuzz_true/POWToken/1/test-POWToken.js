const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokensGVTK4Q = await POWToken.new({from: accounts[4]});
		const uintiEn7jlU = BigInt("1191")
		const uintTn1cWA3 = BigInt("1780")
//		const uint256ornD4y = await POWTokensGVTK4Q.setWorkingHashRate.call(uintiEn7jlU, {from: accounts[3]});
//		const uint256r88V7T4 = await POWTokensGVTK4Q.setWorkingHashRate.call(uintTn1cWA3, {from: accounts[1]});
//		await POWTokensGVTK4Q.whenNotPaused.call({from: accounts[4]});

		await expect(POWTokensGVTK4Q.setWorkingHashRate.call(uintiEn7jlU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenHc91Gzz = await POWToken.new({from: accounts[4]});
		const uintMJAoY3L = BigInt("697")
		const addressDfYkt7B = accounts[4]
		const uintPQQeMEm = BigInt("1716")
		const addressOBHuv5I = accounts[0]
//		const addressSfqTsSo = await POWTokenHc91Gzz.mint.call(addressDfYkt7B, uintMJAoY3L, {from: accounts[1]});
//		await POWTokenHc91Gzz.pause.call({from: accounts[1]});
//		const boolyYntvos = await POWTokenHc91Gzz.approve.call(addressOBHuv5I, uintPQQeMEm, {from: accounts[3]});

		await expect(POWTokenHc91Gzz.mint.call(addressDfYkt7B, uintMJAoY3L, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenlkihRtF = await POWToken.new({from: accounts[4]});
		const uintzGcwZbz = BigInt("831")
//		const uint256W1wyzLa = await POWTokenlkihRtF.getCurWorkingRate.call({from: accounts[5]});
//		const uint256R4JC9i1 = await POWTokenlkihRtF.stakingRewardRate.call({from: accounts[1]});
//		const uint256PXiKcnK = await POWTokenlkihRtF.setDepreciationNumerator.call(uintzGcwZbz, {from: accounts[1]});
//		const uint256wbVKpqH = await POWTokenlkihRtF.getIncomeBTCInWeiPerSec.call({from: accounts[4]});
//		await POWTokenlkihRtF.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokenlkihRtF.getCurWorkingRate.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenKan5AKM = await POWToken.new({from: accounts[0]});
		const uinteVIJvWu = BigInt("441")
		const addressCFqG23 = accounts[1]
		const uintseW4Ki = BigInt("1767")
		const addressGadRPmQ = accounts[5]
		const addressXD96qVu = "0x0000000000000000000000000000000000000001"
		const addressUZvrxoi = accounts[2]
		const uintMxG5mX = BigInt("638")
//		const boolVBEQ1DJ = await POWTokenKan5AKM.transfer.call(addressCFqG23, uinteVIJvWu, {from: accounts[3]});
//		const boolu44sw2z = await POWTokenKan5AKM.transferFrom.call(addressXD96qVu, addressGadRPmQ, uintseW4Ki, {from: accounts[0]});
//		const addressqebzTX = await POWTokenKan5AKM.setBtcParam.call(addressUZvrxoi, {from: accounts[2]});
//		const uint256M5fE1Z = await POWTokenKan5AKM.setStakingRewardRatio.call(uintMxG5mX, {from: accounts[5]});
//		const boolbd8PR6a = await POWTokenKan5AKM.paused.call({from: accounts[2]});

		await expect(POWTokenKan5AKM.transfer.call(addressCFqG23, uinteVIJvWu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenC6OWD19 = await POWToken.new({from: accounts[0]});
		const uintgG6lXkH = BigInt("276")
		const addressOCLUKCc = "0x0000000000000000000000000000000000000001"
		const addressbB5jR8w = accounts[4]
		const uinthPMgw1P = BigInt("292")
		const uint75uJ9F = BigInt("703")
		const uintH9hmqMJ = BigInt("338")
		const uintvj1OEi = BigInt("1577")
		const uintC4ticH2 = BigInt("1256")
		const addressKFPip0u = accounts[1]
		const address5xzncX = accounts[3]
		const addressqLccnJ1 = accounts[1]
		const addressRyQZAh1 = accounts[5]
		const addressgiFceox = "0x0000000000000000000000000000000000000001"
		const addressjpAKwL2 = accounts[5]
		const addressvAY7siH = accounts[2]
		const addressGg5gdC1 = accounts[3]
		const stringz1BX1r6 = "hVPGpWcOOJTYSmqjjViV11LF8zvl002LolJ6YaVLHf7OvXqOR7phpvl6GV3gOrKFHIJAVQZbRfnc7CRNEE"
		const stringJl0T0qk = "fEzgrRxFIl2rIvQcNj9Nv5yxrs64nAVaTQrovrvzUiiq6jIfNQ2QEpHsjql"
//		const addressA6WQhNS = await POWTokenC6OWD19.inCaseTokensGetStuck.call(addressOCLUKCc, uintgG6lXkH, {from: accounts[3]});
//		await POWTokenC6OWD19.pause.call({from: accounts[3]});
//		const addressDMsBQvr = await POWTokenC6OWD19.transferOwnership.call(addressbB5jR8w, {from: accounts[1]});
//		const stringvfx7FEr = await POWTokenC6OWD19.initialize.call(stringJl0T0qk, stringz1BX1r6, addressGg5gdC1, addressvAY7siH, addressjpAKwL2, addressgiFceox, addressRyQZAh1, addressqLccnJ1, address5xzncX, addressKFPip0u, uintC4ticH2, uintvj1OEi, uintH9hmqMJ, uint75uJ9F, uinthPMgw1P, {from: accounts[3]});

		await expect(POWTokenC6OWD19.inCaseTokensGetStuck.call(addressOCLUKCc, uintgG6lXkH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenjbLZ7vS = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressR8IBKze = accounts[0]
		const uinte2xJk8S = BigInt("180")
		const uintSP0CMOY = BigInt("1409")
		const uint5OHki5 = BigInt("347")
		const uintcVc2spD = BigInt("1972")
		const uintakzKvlf = BigInt("448")
		const addressG5z23Wj = accounts[2]
		const addresstRQ6Cuy = accounts[3]
		const addressleAUTgk = accounts[2]
		const addressZEmacVG = "0x0000000000000000000000000000000000000001"
		const addressKY151Q9 = accounts[2]
		const addressxLHf7aH = "0x0000000000000000000000000000000000000001"
		const addressMTPLR8U = accounts[0]
		const addressEjlhHqP = accounts[0]
		const stringRV9PrkL = "m7695aBH6Zl7S8z0xUBuUTipr8XAv1Zm2rXhHFRzyIYROTGBBAEd7j6Jt42FS5PLJei0pZBvFY5t"
		const stringVj6JXS = "lNcLvakqu3obDeM6DgbYzWJNGKJmX4rTWRY4Mgyts4YmRJd6Y3QnVM5dMSbbRo3cXHXEzNx0MT2pHhK856o"
		await POWTokenjbLZ7vS.whenNotPaused.call({from: accounts[2]});
		const uint256rgEHu6D = await POWTokenjbLZ7vS.getCurWorkingRate.call({from: accounts[2]});
		const addressEBqX9zV = await POWTokenjbLZ7vS.setParamSetter.call(addressR8IBKze, {from: accounts[4]});
		const stringGv7wv2n = await POWTokenjbLZ7vS.initialize.call(stringVj6JXS, stringRV9PrkL, addressEjlhHqP, addressMTPLR8U, addressxLHf7aH, addressKY151Q9, addressZEmacVG, addressleAUTgk, addresstRQ6Cuy, addressG5z23Wj, uintakzKvlf, uintcVc2spD, uint5OHki5, uintSP0CMOY, uinte2xJk8S, {from: accounts[4]});
	});

	it('test for POWToken', async () => {
		const POWTokenIIjITL = await POWToken.new({from: accounts[4]});
		const uintZje9mjC = BigInt("1618")
		const uintrCyzTku = BigInt("1870")
		const uint256mNAuO6i = await POWTokenIIjITL.remainingAmount.call({from: accounts[1]});
//		const uint256CVDNJlB = await POWTokenIIjITL.setMinerPoolFeeNumerator.call(uintZje9mjC, {from: accounts[4]});
//		const uint256SmA5ayD = await POWTokenIIjITL.getIncomeBTCInWeiPerSec.call({from: accounts[4]});
//		const uint256dNDurs = await POWTokenIIjITL.setMinerPoolFeeNumerator.call(uintrCyzTku, {from: accounts[4]});

		assert.equal(uint256mNAuO6i, BigInt("0"))
		await expect(POWTokenIIjITL.setMinerPoolFeeNumerator.call(uintZje9mjC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenU19eTyb = await POWToken.new({from: accounts[0]});
		const uintvoyS13Q = BigInt("727")
		const addressGOyy1uQ = "0x0000000000000000000000000000000000000001"
		const addressIIzazCn = accounts[2]
		const uintnVTlqrx = BigInt("1219")
		const addressZuCnuPC = accounts[0]
//		const booli4qq5sZ = await POWTokenU19eTyb.transferFrom.call(addressIIzazCn, addressGOyy1uQ, uintvoyS13Q, {from: accounts[2]});
//		const uint256fMfGXyw = await POWTokenU19eTyb.getCurWorkingRate.call({from: accounts[2]});
//		const boolihi135C = await POWTokenU19eTyb.transfer.call(addressZuCnuPC, uintnVTlqrx, {from: accounts[2]});

		await expect(POWTokenU19eTyb.transferFrom.call(addressIIzazCn, addressGOyy1uQ, uintvoyS13Q, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenIIjITL = await POWToken.new({from: accounts[4]});
		const uintRVAr2b2 = BigInt("1618")
		const uintSKqYYHJ = BigInt("1870")
		const uint256mNAuO6i = await POWTokenIIjITL.remainingAmount.call({from: accounts[1]});
//		const uint256SyHplEI = await POWTokenIIjITL.getHistoryWorkingRate.call({from: accounts[1]});
//		const uint256CVDNJlB = await POWTokenIIjITL.setMinerPoolFeeNumerator.call(uintRVAr2b2, {from: accounts[4]});
//		const uint256SmA5ayD = await POWTokenIIjITL.getIncomeBTCInWeiPerSec.call({from: accounts[4]});
//		const uint256dNDurs = await POWTokenIIjITL.setMinerPoolFeeNumerator.call(uintSKqYYHJ, {from: accounts[4]});

		assert.equal(uint256mNAuO6i, BigInt("0"))
		await expect(POWTokenIIjITL.getHistoryWorkingRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenHc91Gzz = await POWToken.new({from: accounts[4]});
		const uintpcpwFP = BigInt("1716")
		const addressyCmJk4D = accounts[2]
//		const uint256JhCyIRM = await POWTokenHc91Gzz.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[5]});
//		const boolyYntvos = await POWTokenHc91Gzz.approve.call(addressyCmJk4D, uintpcpwFP, {from: accounts[3]});
//		await POWTokenHc91Gzz.whenNotPaused.call({from: accounts[3]});

		await expect(POWTokenHc91Gzz.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenHc91Gzz = await POWToken.new({from: accounts[4]});
		const uintaYhSdEA = BigInt("667")
		const addressBua9Aof = accounts[4]
		const uintnugWShD = BigInt("812")
		const addresslMsNGM = accounts[0]
		const uintOWy3CtN = BigInt("1716")
		const addressLdM2t4a = accounts[1]
//		await POWTokenHc91Gzz.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressSfqTsSo = await POWTokenHc91Gzz.mint.call(addressBua9Aof, uintaYhSdEA, {from: accounts[1]});
//		const uint256MsCLxBW = await POWTokenHc91Gzz.setDepreciationNumerator.call(uintnugWShD, {from: accounts[3]});
//		const addressPBAo9lW = await POWTokenHc91Gzz.setParamSetter.call(addresslMsNGM, {from: accounts[0]});
//		const boolyYntvos = await POWTokenHc91Gzz.approve.call(addressLdM2t4a, uintOWy3CtN, {from: accounts[3]});

		await expect(POWTokenHc91Gzz.whenPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenIIjITL = await POWToken.new({from: accounts[4]});
		const uintuGhR8GX = BigInt("1266")
		const addressaO6zFVK = accounts[0]
		const uintLXXnhnQ = BigInt("1618")
		const uint4y5cTW = BigInt("1870")
		const boolQ09Jqq8 = await POWTokenIIjITL.approve.call(addressaO6zFVK, uintuGhR8GX, {from: accounts[5]});
		const uint256mNAuO6i = await POWTokenIIjITL.remainingAmount.call({from: accounts[1]});
//		const uint256SyHplEI = await POWTokenIIjITL.getHistoryWorkingRate.call({from: accounts[1]});
//		const uint256l3WEnL1 = await POWTokenIIjITL.remainingAmount.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256CVDNJlB = await POWTokenIIjITL.setMinerPoolFeeNumerator.call(uintLXXnhnQ, {from: accounts[4]});
//		const uint256SmA5ayD = await POWTokenIIjITL.getIncomeBTCInWeiPerSec.call({from: accounts[4]});
//		const uint256dNDurs = await POWTokenIIjITL.setMinerPoolFeeNumerator.call(uint4y5cTW, {from: accounts[4]});

		assert.equal(boolQ09Jqq8, true)
		assert.equal(uint256mNAuO6i, BigInt("0"))
		await expect(POWTokenIIjITL.getHistoryWorkingRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenIIjITL = await POWToken.new({from: accounts[4]});
		const uinto9C9VsO = BigInt("1848")
		const uint05NIo7 = BigInt("363")
		const uintvyNfvz8 = BigInt("1535")
		const uintZg9MZrI = BigInt("281")
		const uintcz26IGY = BigInt("1522")
		const addressIczReoF = accounts[1]
		const addressFdz9crv = accounts[1]
		const addressiy2wvky = accounts[2]
		const addressAGiRa5H = accounts[3]
		const addressDD6GGJk = accounts[1]
		const addressaCxLxYi = accounts[4]
		const addresse0xGFwl = accounts[0]
		const addresssEv6HUm = "0x0000000000000000000000000000000000000001"
		const stringSHV1C7s = "E75BhtG579L8pu5WUzRqq7JU6eXNf9WpRALlXQbVXJ2lQyqNaEjgP2QkyMhLDlNbyFc1rNw3sBb9zKjlTnqguDj3vCoJ"
		const stringWOKcV4u = "oo76JrBV1yWgskLqU3yg7U4rHw3sLCFNBKKGqFpE7UOuEoo3jRMBjuEidlKtqzDPwxqxO62Y72vsOkB9rrnWk"
		const uintrOP2ln = BigInt("1618")
		const uintJmUrKFx = BigInt("1870")
		const uinthbkJduY = BigInt("121")
		const addressHYuRUGV = accounts[2]
		const uintHOm96M6 = BigInt("1901")
		const address18k7jy = accounts[4]
		const uint256mNAuO6i = await POWTokenIIjITL.remainingAmount.call({from: accounts[1]});
//		const stringXQJVVRX = await POWTokenIIjITL.initialize.call(stringWOKcV4u, stringSHV1C7s, addresssEv6HUm, addresse0xGFwl, addressaCxLxYi, addressDD6GGJk, addressAGiRa5H, addressiy2wvky, addressFdz9crv, addressIczReoF, uintcz26IGY, uintZg9MZrI, uintvyNfvz8, uint05NIo7, uinto9C9VsO, {from: accounts[1]});
//		const uint256CVDNJlB = await POWTokenIIjITL.setMinerPoolFeeNumerator.call(uintrOP2ln, {from: accounts[4]});
//		const uint256SmA5ayD = await POWTokenIIjITL.getIncomeBTCInWeiPerSec.call({from: accounts[4]});
//		const uint256dNDurs = await POWTokenIIjITL.setMinerPoolFeeNumerator.call(uintJmUrKFx, {from: accounts[4]});
//		const booljxp2ex5 = await POWTokenIIjITL.transfer.call(addressHYuRUGV, uinthbkJduY, {from: accounts[4]});
//		const addressWJokJCQ = await POWTokenIIjITL.claimIncome.call(address18k7jy, uintHOm96M6, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256mNAuO6i, BigInt("0"))
		await expect(POWTokenIIjITL.initialize.call(stringWOKcV4u, stringSHV1C7s, addresssEv6HUm, addresse0xGFwl, addressaCxLxYi, addressDD6GGJk, addressAGiRa5H, addressiy2wvky, addressFdz9crv, addressIczReoF, uintcz26IGY, uintZg9MZrI, uintvyNfvz8, uint05NIo7, uinto9C9VsO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokent68Nc1W = await POWToken.new({from: accounts[0]});
		const uintSlO1fc5 = BigInt("108")
		const addressR3G7rO = accounts[2]
		const uintLk3HUmg = BigInt("1375")
		const addressucOZlZ = accounts[1]
//		const addressGQzvKL = await POWTokent68Nc1W.claimIncome.call(addressR3G7rO, uintSlO1fc5, {from: accounts[1]});
//		const uint256F1EarM = await POWTokent68Nc1W.getCurWorkingRate.call({from: accounts[4]});
//		const address3llTpZ = await POWTokent68Nc1W.claimIncome.call(addressucOZlZ, uintLk3HUmg, {from: accounts[2]});

		await expect(POWTokent68Nc1W.claimIncome.call(addressR3G7rO, uintSlO1fc5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenw2z2v5U = await POWToken.new({from: accounts[0]});
		const uintLFGjFpx = BigInt("1328")
		const uint256LUVxoj0 = await POWTokenw2z2v5U.lpStakingRewardRate.call({from: accounts[4]});
//		const uint256rdc3LT9 = await POWTokenw2z2v5U.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[3]});
//		const uint256L8PRnSa = await POWTokenw2z2v5U.setWorkingHashRate.call(uintLFGjFpx, {from: accounts[0]});

		assert.equal(uint256LUVxoj0, BigInt("0"))
		await expect(POWTokenw2z2v5U.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenIIjITL = await POWToken.new({from: accounts[4]});
		const uint256mNAuO6i = await POWTokenIIjITL.remainingAmount.call({from: accounts[1]});
//		const uint256SmA5ayD = await POWTokenIIjITL.getIncomeBTCInWeiPerSec.call({from: accounts[4]});

		assert.equal(uint256mNAuO6i, BigInt("0"))
		await expect(POWTokenIIjITL.getIncomeBTCInWeiPerSec.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenHc91Gzz = await POWToken.new({from: accounts[4]});
		const byteTdq8Zj8 = "0x04170e050e0c1b050905041c131a201a141205151e1805100e130b1d1a0c071e"
		const bytec3l8qDz = "0x0b0f2012160c1415160606010c011f001d0a12010b1a070c15191604161a100a"
		const uintT9L3Rry = BigInt("162")
		const uintqMTvJIN = BigInt("985")
		const uintYkcbje8 = BigInt("1752")
		const addresshFw3wHV = accounts[2]
		const addresstMDm6RL = accounts[3]
		const boolS15feuv = await POWTokenHc91Gzz.paused.call({from: accounts[3]});
//		const addressQEB0a4j = await POWTokenHc91Gzz.permit.call(addresstMDm6RL, addresshFw3wHV, uintYkcbje8, uintqMTvJIN, uintT9L3Rry, bytec3l8qDz, byteTdq8Zj8, {from: accounts[5]});
//		const uint256cDXvI3j = await POWTokenHc91Gzz.lpStakingRewardRate.call({from: accounts[2]});

		assert.equal(boolS15feuv, false)
		await expect(POWTokenHc91Gzz.permit.call(addresstMDm6RL, addresshFw3wHV, uintYkcbje8, uintqMTvJIN, uintT9L3Rry, bytec3l8qDz, byteTdq8Zj8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenHc91Gzz = await POWToken.new({from: accounts[4]});
		const uintnSNYr5f = BigInt("697")
		const address5wGyaL = accounts[5]
//		await POWTokenHc91Gzz.updateIncomeRate.call({from: accounts[1]});
//		const addressSfqTsSo = await POWTokenHc91Gzz.mint.call(address5wGyaL, uintnSNYr5f, {from: accounts[1]});

		await expect(POWTokenHc91Gzz.updateIncomeRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenHc91Gzz = await POWToken.new({from: accounts[4]});
		const uintit5KH1 = BigInt("1961")
		const addressHKpA73k = accounts[2]
		const uintTxzV8B2 = BigInt("1434")
		const addressQNE6Xnp = accounts[3]
//		const addressgeythI = await POWTokenHc91Gzz.claimReward.call(addressHKpA73k, uintit5KH1, {from: accounts[1]});
//		const boolcmtim2 = await POWTokenHc91Gzz.transfer.call(addressQNE6Xnp, uintTxzV8B2, {from: accounts[0]});

		await expect(POWTokenHc91Gzz.claimReward.call(addressHKpA73k, uintit5KH1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})