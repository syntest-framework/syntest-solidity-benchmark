const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOSUFNmG = await FrogDAO.new({from: accounts[4]});
		const uintcx8BrfO = BigInt("386")
		const addressB18tRiT = accounts[4]
		const addressxUCUWck = accounts[0]
		const addressgL8akR = accounts[4]
		const addresskPLpzZ6 = accounts[0]
		const addresstivX8NT = accounts[1]
		const addresspLLzOXd = accounts[1]
		const uintTH3Vz1o = BigInt("600")
		const uinttKAbqEu = BigInt("845")
//		const boolnQYJlvL = await FrogDAOSUFNmG.transferFrom.call(addressxUCUWck, addressB18tRiT, uintcx8BrfO, {from: accounts[0]});
//		const uintFZTq1Dq = await FrogDAOSUFNmG.allowance.call(addresskPLpzZ6, addressgL8akR, {from: accounts[5]});
//		const uinteTrGvmi = await FrogDAOSUFNmG.allowance.call(addresspLLzOXd, addresstivX8NT, {from: "0x0000000000000000000000000000000000000001"});
//		const uintMjzazY3 = await FrogDAOSUFNmG.safeDiv.call(uinttKAbqEu, uintTH3Vz1o, {from: accounts[2]});

		await expect(FrogDAOSUFNmG.transferFrom.call(addressxUCUWck, addressB18tRiT, uintcx8BrfO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOkawyvg8 = await FrogDAO.new({from: accounts[1]});
		const uintE3ARQQR = BigInt("667")
		const uintu4UvKh3 = BigInt("1340")
		const uintlZilYMc = BigInt("1696")
		const uintNqN3h1b = BigInt("310")
		const uintuP8QYop = BigInt("1324")
		const addressB2wFFV0 = accounts[3]
		const addresslJbuz3O = "0x0000000000000000000000000000000000000001"
		const uintrOP91xb = BigInt("1206")
		const addressfnAO6Wt = accounts[2]
		const uintnt9HTBl = await FrogDAOkawyvg8.safeDiv.call(uintu4UvKh3, uintE3ARQQR, {from: accounts[2]});
		const uintkXG2VZR = await FrogDAOkawyvg8.safeMul.call(uintNqN3h1b, uintlZilYMc, {from: accounts[4]});
//		const boolCMSKx5N = await FrogDAOkawyvg8.transferFrom.call(addresslJbuz3O, addressB2wFFV0, uintuP8QYop, {from: accounts[4]});
//		const boolfsvj8nG = await FrogDAOkawyvg8.approve.call(addressfnAO6Wt, uintrOP91xb, {from: accounts[2]});

		assert.equal(uintkXG2VZR, BigInt("525760"))
		assert.equal(uintnt9HTBl, BigInt("2"))
		await expect(FrogDAOkawyvg8.transferFrom.call(addresslJbuz3O, addressB2wFFV0, uintuP8QYop, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOzokR5m6 = await FrogDAO.new({from: accounts[4]});
		const uintARDXgD6 = BigInt("1210")
		const uintEzjGe8n = BigInt("300")
		const addressEUBovGy = accounts[4]
		const uintZgqsAu5 = BigInt("879")
		const addresstpl7R5 = accounts[3]
		const uintfbupoP = BigInt("929")
		const uintFwqboV = BigInt("466")
		const uintrjnOkUr = await FrogDAOzokR5m6.safeMul.call(uintEzjGe8n, uintARDXgD6, {from: accounts[5]});
		const uintI1oofSg = await FrogDAOzokR5m6.balanceOf.call(addressEUBovGy, {from: accounts[2]});
		const uintbwcWfla = await FrogDAOzokR5m6.totalSupply.call({from: accounts[2]});
//		const boolIbV5xIQ = await FrogDAOzokR5m6.transfer.call(addresstpl7R5, uintZgqsAu5, {from: accounts[2]});
//		const uintgTAktp = await FrogDAOzokR5m6.safeDiv.call(uintFwqboV, uintfbupoP, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintI1oofSg, BigInt("1000000000000000000000000"))
		assert.equal(uintbwcWfla, BigInt("1000000000000000000000000"))
		assert.equal(uintrjnOkUr, BigInt("363000"))
		await expect(FrogDAOzokR5m6.transfer.call(addresstpl7R5, uintZgqsAu5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOOsAU7uQ = await FrogDAO.new({from: accounts[4]});
		const addressB1pCfNS = accounts[0]
		const addressC2wYR7c = accounts[2]
		const uintt0R4Hjy = BigInt("1509")
		const addressERFo4TI = accounts[4]
		const uintqIMYwcS = BigInt("1638")
		const uintozz1kGU = BigInt("1238")
		const addressQl8839R = accounts[3]
		const uintrFO79jF = BigInt("89")
		const uintxqb6m8 = BigInt("875")
		const uintJLGWI8I = await FrogDAOOsAU7uQ.allowance.call(addressC2wYR7c, addressB1pCfNS, {from: accounts[3]});
		const boolZxKZVHd = await FrogDAOOsAU7uQ.approve.call(addressERFo4TI, uintt0R4Hjy, {from: accounts[1]});
//		const uintaxfbHny = await FrogDAOOsAU7uQ.safeSub.call(uintozz1kGU, uintqIMYwcS, {from: accounts[2]});
//		const uintMWgAhCb = await FrogDAOOsAU7uQ.balanceOf.call(addressQl8839R, {from: accounts[0]});
//		const uintH6kZWZ = await FrogDAOOsAU7uQ.safeSub.call(uintxqb6m8, uintrFO79jF, {from: accounts[3]});

		assert.equal(boolZxKZVHd, true)
		assert.equal(uintJLGWI8I, BigInt("0"))
		await expect(FrogDAOOsAU7uQ.safeSub.call(uintozz1kGU, uintqIMYwcS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOAdGipiS = await FrogDAO.new({from: accounts[2]});
		const uintlUDY9VJ = BigInt("1193")
		const addressZfI7Zw9 = accounts[4]
		const uintTMEYYRb = BigInt("1255")
		const uintmgZQzAb = BigInt("862")
		const uinte5VnPaW = await FrogDAOAdGipiS.totalSupply.call({from: accounts[3]});
		const boolh50dkpt = await FrogDAOAdGipiS.transfer.call(addressZfI7Zw9, uintlUDY9VJ, {from: accounts[2]});
//		const uintw4ExeI = await FrogDAOAdGipiS.safeSub.call(uintmgZQzAb, uintTMEYYRb, {from: accounts[2]});

		assert.equal(boolh50dkpt, true)
		assert.equal(uinte5VnPaW, BigInt("1000000000000000000000000"))
		await expect(FrogDAOAdGipiS.safeSub.call(uintmgZQzAb, uintTMEYYRb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOwZxUbLW = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const uintR6oRElW = BigInt("145")
		const uintUZgoC4Q = BigInt("1306")
		const uintXQAbHDo = BigInt("701")
		const uintXdyWAxU = BigInt("1314")
		const uintt5mDbln = BigInt("1927")
		const addressE7OwrhT = accounts[5]
		const addressefPbtzS = accounts[3]
		const uintOIti4AR = BigInt("1572")
		const addressG5kvkEM = accounts[0]
		const uintS6477xP = BigInt("7")
		const uintz1n1Djo = BigInt("127")
		const uintfz6y520 = await FrogDAOwZxUbLW.safeAdd.call(uintUZgoC4Q, uintR6oRElW, {from: "0x0000000000000000000000000000000000000001"});
		const uintmrxCAG5 = await FrogDAOwZxUbLW.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uintxOM2sBp = await FrogDAOwZxUbLW.safeSub.call(uintXdyWAxU, uintXQAbHDo, {from: accounts[1]});
		const boolnyAd4ka = await FrogDAOwZxUbLW.transferFrom.call(addressefPbtzS, addressE7OwrhT, uintt5mDbln, {from: accounts[2]});
		const boollDW6ZPu = await FrogDAOwZxUbLW.approve.call(addressG5kvkEM, uintOIti4AR, {from: accounts[3]});
		const uintTXoRuXA = await FrogDAOwZxUbLW.safeSub.call(uintz1n1Djo, uintS6477xP, {from: accounts[3]});
	});
})