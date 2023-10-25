const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokenb1JwdU9 = await POWToken.new({from: accounts[5]});
		const uint0Hpk0P = BigInt("528")
		const addressjVmcgIY = accounts[0]
		const uintUfIZqxW = BigInt("610")
		const addressMc9MMDr = accounts[2]
		const addressaaVda3O = accounts[2]
		const boolwROXYgx = await POWTokenb1JwdU9.transfer.call(addressjVmcgIY, uint0Hpk0P, {from: accounts[0]});
		const boolMNfUm7d = await POWTokenb1JwdU9.transferFrom.call(addressaaVda3O, addressMc9MMDr, uintUfIZqxW, {from: accounts[3]});

		await expect(POWTokenb1JwdU9.transfer.call(addressjVmcgIY, uint0Hpk0P, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenvUHCzMh = await POWToken.new({from: accounts[5]});
		await POWTokenvUHCzMh.whenPaused.call({from: accounts[1]});
		const boolzpDLdv8 = await POWTokenvUHCzMh.paused.call({from: accounts[0]});
		const uint256Ryi5Az = await POWTokenvUHCzMh.getCurWorkingRate.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokenvUHCzMh.whenPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenBsS6hC8 = await POWToken.new({from: accounts[2]});
		const uintg96n9mS = BigInt("315")
		const addressWLIltY = accounts[2]
		const addresspkqB2F8 = await POWTokenBsS6hC8.claimIncome.call(addressWLIltY, uintg96n9mS, {from: accounts[1]});
		await POWTokenBsS6hC8.unpause.call({from: accounts[5]});
		await POWTokenBsS6hC8.pause.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokenBsS6hC8.claimIncome.call(addressWLIltY, uintg96n9mS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokentRsI01 = await POWToken.new({from: accounts[1]});
		const uintfh3Udl = BigInt("1776")
		const uintN1RjIeB = BigInt("599")
		const addressrl2zbU7 = accounts[2]
		const uintLnWsCgQ = BigInt("1475")
		const addressp01dFwb = "0x0000000000000000000000000000000000000001"
		const uint256i9Ci5d = await POWTokentRsI01.getIncomeBTCInWeiPerSec.call({from: accounts[2]});
		const uint256y0DaXiS = await POWTokentRsI01.setDepreciationNumerator.call(uintfh3Udl, {from: accounts[3]});
		const uint256Kl0Szka = await POWTokentRsI01.getHistoryWorkingRate.call({from: accounts[3]});
		const bools3PMlKb = await POWTokentRsI01.approve.call(addressrl2zbU7, uintN1RjIeB, {from: accounts[5]});
		const addressNatEtFg = await POWTokentRsI01.mint.call(addressp01dFwb, uintLnWsCgQ, {from: accounts[0]});

		await expect(POWTokentRsI01.getIncomeBTCInWeiPerSec.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenupOdRED = await POWToken.new({from: accounts[3]});
		const uinthX3JMjj = BigInt("231")
		const uint256vpKDl5E = await POWTokenupOdRED.setMinerPoolFeeNumerator.call(uinthX3JMjj, {from: accounts[0]});
		const uint256SzrVCP6 = await POWTokenupOdRED.getCurWorkingRate.call({from: accounts[1]});
		const uint256fbvwvgi = await POWTokenupOdRED.getIncomeBTCInWeiPerSec.call({from: accounts[3]});

		await expect(POWTokenupOdRED.setMinerPoolFeeNumerator.call(uinthX3JMjj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenoMcNSiP = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintqz0PNB3 = BigInt("1617")
		const addressSCcdLum = accounts[4]
		const uint256fh5FWkz = await POWTokenoMcNSiP.notifyRewardAmount.call(uintqz0PNB3, {from: accounts[5]});
		const addresskSdsgW9 = await POWTokenoMcNSiP.setBtcParam.call(addressSCcdLum, {from: accounts[0]});
	});

	it('test for POWToken', async () => {
		const POWTokenSaLESH3 = await POWToken.new({from: accounts[3]});
		const uint2lrc9X = BigInt("1565")
		const uinteo7WYY8 = BigInt("327")
		const addressdnFSPri = accounts[4]
		const uint256vWUB27k = await POWTokenSaLESH3.notifyRewardAmount.call(uint2lrc9X, {from: accounts[2]});
		const addressKqCoy33 = await POWTokenSaLESH3.claimReward.call(addressdnFSPri, uinteo7WYY8, {from: accounts[2]});

		await expect(POWTokenSaLESH3.notifyRewardAmount.call(uint2lrc9X, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenb1JwdU9 = await POWToken.new({from: accounts[5]});
		const uintaa4bAxB = BigInt("528")
		const addressCoqdTYk = accounts[0]
		const uintHRcld3l = BigInt("610")
		const addressKNGKpsj = accounts[2]
		const addressu4U8otH = accounts[2]
		const uint256aJ40NF = await POWTokenb1JwdU9.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[1]});
		const boolwROXYgx = await POWTokenb1JwdU9.transfer.call(addressCoqdTYk, uintaa4bAxB, {from: accounts[0]});
		const boolMNfUm7d = await POWTokenb1JwdU9.transferFrom.call(addressu4U8otH, addressKNGKpsj, uintHRcld3l, {from: accounts[3]});

		await expect(POWTokenb1JwdU9.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenhyLZ2Nr = await POWToken.new({from: accounts[2]});
		const uintd4WJR5E = BigInt("1141")
		const addressIdizlkx = accounts[1]
		const uintYk8lEaO = BigInt("1731")
		const uintcXc2uo0 = BigInt("805")
		const uintC4Cy85l = BigInt("1814")
		const uintxWarwWq = BigInt("196")
		const uint4EO44A = BigInt("1299")
		const addressawIjYN = accounts[0]
		const addresshn87jS = accounts[4]
		const addresswH5wVuI = accounts[2]
		const addressNx2LRyU = accounts[1]
		const addressxFSESbV = accounts[5]
		const addressRInvgNp = accounts[5]
		const addressunFMhbX = accounts[1]
		const addressrpTQzsM = accounts[4]
		const stringle3VR8 = "hT78pF31tUuqs8jgeQxwVeJHBJoqecwrDwEM7tfAKRByQwFZOFQy90antphnwJZ4"
		const stringAO3S2sL = "vTfpn6WyzQpkHOkwPDpSU8ONgbocSqt8rD"
		const uintCHDIhT = BigInt("1666")
		const addressKFldUY = "0x0000000000000000000000000000000000000001"
		const uintcoBw5Cu = BigInt("970")
		const addresszgAH3E = accounts[4]
		const addressEK4Y7xs = accounts[0]
		const addressL8o6ZpH = await POWTokenhyLZ2Nr.claimReward.call(addressIdizlkx, uintd4WJR5E, {from: accounts[1]});
		const stringZDcIlHe = await POWTokenhyLZ2Nr.initialize.call(stringAO3S2sL, stringle3VR8, addressrpTQzsM, addressunFMhbX, addressRInvgNp, addressxFSESbV, addressNx2LRyU, addresswH5wVuI, addresshn87jS, addressawIjYN, uint4EO44A, uintxWarwWq, uintC4Cy85l, uintcXc2uo0, uintYk8lEaO, {from: accounts[2]});
		const addressj7WpuYb = await POWTokenhyLZ2Nr.claimIncome.call(addressKFldUY, uintCHDIhT, {from: accounts[2]});
		const boollN3vqkq = await POWTokenhyLZ2Nr.transferFrom.call(addressEK4Y7xs, addresszgAH3E, uintcoBw5Cu, {from: accounts[3]});
		await POWTokenhyLZ2Nr.whenNotPaused.call({from: accounts[2]});

		await expect(POWTokenhyLZ2Nr.claimReward.call(addressIdizlkx, uintd4WJR5E, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenb1JwdU9 = await POWToken.new({from: accounts[5]});
		const uintd9Le01k = BigInt("1363")
		const booliKAgrIl = await POWTokenb1JwdU9.paused.call({from: accounts[5]});
		const uint256Ts8UhyK = await POWTokenb1JwdU9.setWorkingHashRate.call(uintd9Le01k, {from: accounts[4]});

		assert.equal(booliKAgrIl, false)
		await expect(POWTokenb1JwdU9.setWorkingHashRate.call(uintd9Le01k, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenb1JwdU9 = await POWToken.new({from: accounts[5]});
		const uintPNgMO9f = BigInt("528")
		const addresscuScBZf = accounts[2]
		const uint256uf1iEnB = await POWTokenb1JwdU9.lpStakingRewardRate.call({from: accounts[1]});
		const boolwROXYgx = await POWTokenb1JwdU9.transfer.call(addresscuScBZf, uintPNgMO9f, {from: accounts[0]});

		assert.equal(uint256uf1iEnB, BigInt("0"))
		await expect(POWTokenb1JwdU9.transfer.call(addresscuScBZf, uintPNgMO9f, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenjFKCoiu = await POWToken.new({from: accounts[2]});
		const byteIo0jlzz = "0x181b1f09041b1507030b0c081b1b06131b0c200f1305100f1603200b0614040a"
		const byte0nLAWd = "0x1b1b0f1d1a0d0510081a161d010c000f071c1f200b0d10031c0a0c011203090b"
		const uintvIS4NgW = BigInt("20")
		const uintbhJ01oo = BigInt("748")
		const uintBRZOPFa = BigInt("280")
		const addressgy7zpRi = accounts[4]
		const addressN4KXhsB = accounts[3]
		const uintfE22XP = BigInt("1916")
		const addressUdGAAWp = await POWTokenjFKCoiu.permit.call(addressN4KXhsB, addressgy7zpRi, uintBRZOPFa, uintbhJ01oo, uintvIS4NgW, byte0nLAWd, byteIo0jlzz, {from: accounts[4]});
		await POWTokenjFKCoiu.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256GKnVEX = await POWTokenjFKCoiu.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[2]});
		const uint256iune2LY = await POWTokenjFKCoiu.lpStakingRewardRate.call({from: accounts[0]});
		const uint256Whn5CYc = await POWTokenjFKCoiu.notifyRewardAmount.call(uintfE22XP, {from: accounts[5]});

		await expect(POWTokenjFKCoiu.permit.call(addressN4KXhsB, addressgy7zpRi, uintBRZOPFa, uintbhJ01oo, uintvIS4NgW, byte0nLAWd, byteIo0jlzz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenjFKCoiu = await POWToken.new({from: accounts[2]});
		const bytePMTRpYF = "0x181b1f09041b1507030b0c081b1b06131b0c200f1305100f1603200b0614040a"
		const byteorHzDl = "0x1b1b0f1d1a0d0510081a161d010c000f071c1f200b0d10031c0a0cffffffff1203090b"
		const uintfWsElJ = BigInt("20")
		const uintiNauAxU = BigInt("748")
		const uintwj99IjA = BigInt("280")
		const addressjm9yBYR = accounts[4]
		const addressyMSwrHS = accounts[3]
		const uintF7GxuZ7 = BigInt("1916")
		const addressUdGAAWp = await POWTokenjFKCoiu.permit.call(addressyMSwrHS, addressjm9yBYR, uintwj99IjA, uintiNauAxU, uintfWsElJ, byteorHzDl, bytePMTRpYF, {from: accounts[4]});
		await POWTokenjFKCoiu.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256GKnVEX = await POWTokenjFKCoiu.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[2]});
		const uint256Whn5CYc = await POWTokenjFKCoiu.notifyRewardAmount.call(uintF7GxuZ7, {from: accounts[5]});

		await expect(POWTokenjFKCoiu.permit.call(addressyMSwrHS, addressjm9yBYR, uintwj99IjA, uintiNauAxU, uintfWsElJ, byteorHzDl, bytePMTRpYF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenb1JwdU9 = await POWToken.new({from: accounts[5]});
		const uintqfy7tz5 = BigInt("1407")
		const addressndLRqDn = accounts[0]
		const addressXGz8z1c = accounts[1]
		const boolGJVCXG5 = await POWTokenb1JwdU9.transferFrom.call(addressXGz8z1c, addressndLRqDn, uintqfy7tz5, {from: accounts[3]});
		const uint256uf1iEnB = await POWTokenb1JwdU9.lpStakingRewardRate.call({from: accounts[1]});

		await expect(POWTokenb1JwdU9.transferFrom.call(addressXGz8z1c, addressndLRqDn, uintqfy7tz5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenb1JwdU9 = await POWToken.new({from: accounts[5]});
		const uint256ZSilOPW = await POWTokenb1JwdU9.getHistoryWorkingRate.call({from: accounts[5]});
		const uint256uf1iEnB = await POWTokenb1JwdU9.lpStakingRewardRate.call({from: accounts[1]});

		await expect(POWTokenb1JwdU9.getHistoryWorkingRate.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenb1JwdU9 = await POWToken.new({from: accounts[5]});
		const uintjvrdiMo = BigInt("779")
		const uintTGrddsr = BigInt("1166")
		const uintyOSthBI = BigInt("2012")
		const uintzj9wmnZ = BigInt("225")
		const uintP9H8mqz = BigInt("850")
		const addressuR31ixa = accounts[3]
		const addressbLOz4t = accounts[0]
		const addresskWZbXu = accounts[2]
		const addressgFX4zG5 = accounts[4]
		const addressSI6GXwm = accounts[1]
		const addressIqRaPzf = accounts[0]
		const addressnTjDID3 = accounts[1]
		const addressFEkN8s1 = "0x0000000000000000000000000000000000000001"
		const string0yGo0n = "XfzMNmA5BEhfRoAuws7hIj1KQdLrIYAnciALSg"
		const stringJWzPHy = "Dnf4E29boOmwEOyijUo4c43Vo7vbD9i97SQYSBljqO8DyA"
		const uint256uf1iEnB = await POWTokenb1JwdU9.lpStakingRewardRate.call({from: accounts[1]});
		await POWTokenb1JwdU9.updateIncomeRate.call({from: accounts[1]});
		const stringv7AFhMP = await POWTokenb1JwdU9.initialize.call(stringJWzPHy, string0yGo0n, addressFEkN8s1, addressnTjDID3, addressIqRaPzf, addressSI6GXwm, addressgFX4zG5, addresskWZbXu, addressbLOz4t, addressuR31ixa, uintP9H8mqz, uintzj9wmnZ, uintyOSthBI, uintTGrddsr, uintjvrdiMo, {from: accounts[0]});

		assert.equal(uint256uf1iEnB, BigInt("0"))
		await expect(POWTokenb1JwdU9.updateIncomeRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenhJM69ty = await POWToken.new({from: accounts[5]});
		const uintMNUfj9X = BigInt("43")
		const addressdkvaO4y = accounts[1]
		const byteccEY2Oq = "0x0c171118160d140607081a0816011b11151c0d191c091e1213201c061d080e1e"
		const byteDNXg72Y = "0x0d15161316130208140a110304191d000d1b13071d16020408010f01171f2019"
		const uinttG3rCTm = BigInt("115")
		const uintjrYHbJ = BigInt("175")
		const uintHwduLRG = BigInt("149")
		const addressKtah3h7 = accounts[1]
		const addressrt29QmR = "0x0000000000000000000000000000000000000001"
		const uintaBkG4AO = BigInt("96")
		const addresssI479up = await POWTokenhJM69ty.mint.call(addressdkvaO4y, uintMNUfj9X, {from: accounts[1]});
		const addressVuJen7d = await POWTokenhJM69ty.permit.call(addressrt29QmR, addressKtah3h7, uintHwduLRG, uintjrYHbJ, uinttG3rCTm, byteDNXg72Y, byteccEY2Oq, {from: accounts[1]});
		const uint256jAD6eb = await POWTokenhJM69ty.setElectricCharge.call(uintaBkG4AO, {from: accounts[0]});

		await expect(POWTokenhJM69ty.mint.call(addressdkvaO4y, uintMNUfj9X, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenb1JwdU9 = await POWToken.new({from: accounts[5]});
		const uintf8gQQO = BigInt("779")
		const uintXBihG40 = BigInt("1166")
		const uintKK889y6 = BigInt("2012")
		const uintk4V7nR = BigInt("225")
		const uintKKH752P = BigInt("850")
		const addressFskIlMu = accounts[3]
		const addressQfhFW2L = accounts[0]
		const address9mu7uR = accounts[2]
		const addressszpOnkM = accounts[4]
		const addressYzo9hWp = accounts[1]
		const addressqpnGhvd = accounts[0]
		const addressCMY5bS8 = accounts[1]
		const addressA48hvBF = "0x0000000000000000000000000000000000000001"
		const string0yGo0n = "XfzMNmA5BEhfRoAuws7hIj1KQdLrIYAnciALSg"
		const stringJWzPHy = "Dnf4E29boOmwEOyijUo4c43Vo7vbD9i97SQYSBljqO8DyA"
		const uint256uf1iEnB = await POWTokenb1JwdU9.lpStakingRewardRate.call({from: accounts[1]});
		const stringv7AFhMP = await POWTokenb1JwdU9.initialize.call(stringJWzPHy, string0yGo0n, addressA48hvBF, addressCMY5bS8, addressqpnGhvd, addressYzo9hWp, addressszpOnkM, address9mu7uR, addressQfhFW2L, addressFskIlMu, uintKKH752P, uintk4V7nR, uintKK889y6, uintXBihG40, uintf8gQQO, {from: accounts[0]});

		assert.equal(uint256uf1iEnB, BigInt("0"))
		await expect(POWTokenb1JwdU9.initialize.call(stringJWzPHy, string0yGo0n, addressA48hvBF, addressCMY5bS8, addressqpnGhvd, addressYzo9hWp, addressszpOnkM, address9mu7uR, addressQfhFW2L, addressFskIlMu, uintKKH752P, uintk4V7nR, uintKK889y6, uintXBihG40, uintf8gQQO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenhJM69ty = await POWToken.new({from: accounts[5]});
		const uintoJkb3n8 = BigInt("43")
		const addressA2I608B = accounts[1]
		const bytevfIImXC = "0x0c171118160d140607081a0816011b11151c0d191c091e1213201c061d080e1e"
		const byteSA69xcb = "0x0d15161316130208140a110304191e000d1b13071d16020408010f01171f2019"
		const uintbmX6Oft = BigInt("115")
		const uintQAcQjlI = BigInt("175")
		const uintE2izrKX = BigInt("149")
		const addresspqaqqA = accounts[1]
		const addressWN3jbcj = "0x0000000000000000000000000000000000000001"
		const uintBmESbD = BigInt("96")
		const uint256cpuPdpO = await POWTokenhJM69ty.remainingAmount.call({from: accounts[3]});
		const addresssI479up = await POWTokenhJM69ty.mint.call(addressA2I608B, uintoJkb3n8, {from: accounts[1]});
		const addressVuJen7d = await POWTokenhJM69ty.permit.call(addressWN3jbcj, addresspqaqqA, uintE2izrKX, uintQAcQjlI, uintbmX6Oft, byteSA69xcb, bytevfIImXC, {from: accounts[1]});
		const uint256jAD6eb = await POWTokenhJM69ty.setElectricCharge.call(uintBmESbD, {from: accounts[0]});

		assert.equal(uint256cpuPdpO, BigInt("0"))
		await expect(POWTokenhJM69ty.mint.call(addressA2I608B, uintoJkb3n8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenb1JwdU9 = await POWToken.new({from: accounts[5]});
		const uintKusJbWx = BigInt("705")
		const addressNXJBJQ = "0x0000000000000000000000000000000000000001"
		const boolo5xXW1i = await POWTokenb1JwdU9.approve.call(addressNXJBJQ, uintKusJbWx, {from: accounts[3]});
		const uint256b3N6Vcr = await POWTokenb1JwdU9.getHistoryWorkingRate.call({from: accounts[2]});
		await POWTokenb1JwdU9.updateIncomeRate.call({from: accounts[1]});

		assert.equal(boolo5xXW1i, true)
		await expect(POWTokenb1JwdU9.getHistoryWorkingRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})