const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsDOC4tk9 = await UFragments.new({from: accounts[4]});
		const uintDMfvT1 = BigInt("1117")
		const addressE100WIZ = accounts[1]
//		const addressiD3Nisf = await UFragmentsDOC4tk9.initRebase.call(addressE100WIZ, uintDMfvT1, {from: accounts[3]});
//		const uint256fOyhYeK = await UFragmentsDOC4tk9.calRebase.call({from: accounts[1]});
//		const boolgoeHh13 = await UFragmentsDOC4tk9.isOwner.call({from: accounts[0]});

		await expect(UFragmentsDOC4tk9.initRebase.call(addressE100WIZ, uintDMfvT1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsrbkEryM = await UFragments.new({from: accounts[1]});
		const addressSbUBWHt = accounts[4]
		const intAwY0ns = BigInt("-1790")
		const intILv3THq = BigInt("-931")
		const addresskwnyyoF = accounts[2]
		const intzuZlP5p = BigInt("428")
		const intDlEmjiy = BigInt("-912")
//		const addressLoYY6IG = await UFragmentsrbkEryM.initialize.call(addressSbUBWHt, {from: accounts[2]});
//		const int256OAiiHzH = await UFragmentsrbkEryM.mul.call(intILv3THq, intAwY0ns, {from: accounts[4]});
//		const addressqifRDGQ = await UFragmentsrbkEryM.transferOwnership.call(addresskwnyyoF, {from: accounts[2]});
//		await UFragmentsrbkEryM.onlyOwner.call({from: accounts[3]});
//		const int256o4lk2SV = await UFragmentsrbkEryM.mul.call(intDlEmjiy, intzuZlP5p, {from: accounts[1]});
//		const stringjyzij6 = await UFragmentsrbkEryM.symbol.call({from: accounts[1]});

		await expect(UFragmentsrbkEryM.initialize.call(addressSbUBWHt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsAXppfNZ = await UFragments.new({from: accounts[2]});
		const uintEQTrcdw = BigInt("349")
		const addresstGR55lr = accounts[4]
		const addressd6fXFWS = accounts[2]
		const inthA3IZM5 = BigInt("-1322")
		const intCdBUifF = BigInt("927")
		const boolbDhU0tI = await UFragmentsAXppfNZ.approve.call(addresstGR55lr, uintEQTrcdw, {from: accounts[5]});
//		const addressVovYHQ = await UFragmentsAXppfNZ.transferOwnership.call(addressd6fXFWS, {from: accounts[4]});
//		const int256oWl19or = await UFragmentsAXppfNZ.sub.call(intCdBUifF, inthA3IZM5, {from: accounts[1]});

		assert.equal(boolbDhU0tI, true)
		await expect(UFragmentsAXppfNZ.transferOwnership.call(addressd6fXFWS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentswIZgkiK = await UFragments.new({from: accounts[2]});
		const uintgok0jfW = BigInt("1569")
		const addressbpSMgvQ = accounts[4]
//		const boolz5KbH1D = await UFragmentswIZgkiK.transfer.call(addressbpSMgvQ, uintgok0jfW, {from: accounts[1]});
//		const uint256pVsIQO = await UFragmentswIZgkiK.calRebase.call({from: accounts[5]});

		await expect(UFragmentswIZgkiK.transfer.call(addressbpSMgvQ, uintgok0jfW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentspbonYVb = await UFragments.new({from: accounts[0]});
		const uinttDYnUHu = BigInt("817")
		const addressmjnssJe = accounts[4]
		const intknJ53SN = BigInt("19")
		const intMsyrFM = BigInt("-736")
		const intKqiBzy1 = BigInt("-21")
		const intFWms9uY = BigInt("859")
		const boolAQl3LPa = await UFragmentspbonYVb.approve.call(addressmjnssJe, uinttDYnUHu, {from: accounts[3]});
//		const int256oYBJvp4 = await UFragmentspbonYVb.div.call(intMsyrFM, intknJ53SN, {from: accounts[5]});
//		const int256GU1DhS0 = await UFragmentspbonYVb.div.call(intFWms9uY, intKqiBzy1, {from: accounts[2]});
//		const boolUb6nXJx = await UFragmentspbonYVb.isOwner.call({from: accounts[1]});

		assert.equal(boolAQl3LPa, true)
		await expect(UFragmentspbonYVb.div.call(intMsyrFM, intknJ53SN, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsqh8iJY7 = await UFragments.new({from: accounts[0]});
		const uintJeTws05 = BigInt("80")
		const stringT7BFDCX = "YrEQm3CfUfj6"
		const stringkV64vX = "K9kN6KOdrYZn9n8SNk9NjFgxHozG73BPDhrFeclHrA5M9vD6qDmT431ft9JiLM2sHXUzq10JYHlFPciC4vDi"
		const stringqyw7XEC = await UFragmentsqh8iJY7.initialize.call(stringkV64vX, stringT7BFDCX, uintJeTws05, {from: accounts[0]});
	});

	it('test for UFragments', async () => {
		const UFragmentsAXppfNZ = await UFragments.new({from: accounts[2]});
		const uintvtaOlg = BigInt("349")
		const addressGHGA6MP = accounts[4]
		const addressGEKQJl9 = accounts[3]
		const intl0oOtCq = BigInt("-1322")
		const intOGKEaUr = BigInt("927")
		const boolbDhU0tI = await UFragmentsAXppfNZ.approve.call(addressGHGA6MP, uintvtaOlg, {from: accounts[5]});
		const uint8GtpewsN = await UFragmentsAXppfNZ.decimals.call({from: accounts[0]});
//		const addressVovYHQ = await UFragmentsAXppfNZ.transferOwnership.call(addressGEKQJl9, {from: accounts[4]});
//		const stringQ3zDARq = await UFragmentsAXppfNZ.symbol.call({from: accounts[2]});
//		const int256oWl19or = await UFragmentsAXppfNZ.sub.call(intOGKEaUr, intl0oOtCq, {from: accounts[1]});

		assert.equal(boolbDhU0tI, true)
		assert.equal(uint8GtpewsN, BigInt("0"))
		await expect(UFragmentsAXppfNZ.transferOwnership.call(addressGEKQJl9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsCvlt0f = await UFragments.new({from: accounts[3]});
		const intwrh7AEj = BigInt("1816")
//		const uint256f3QQwtA = await UFragmentsCvlt0f.calRebase.call({from: accounts[5]});
//		const int256AHy1d5a = await UFragmentsCvlt0f.abs.call(intwrh7AEj, {from: accounts[2]});

		await expect(UFragmentsCvlt0f.calRebase.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentstq4yFTm = await UFragments.new({from: accounts[4]});
		const uintMO3Y1Tm = BigInt("488")
		const addressTEO0SBj = accounts[0]
		const addressS0HhWzG = accounts[3]
		const uint8rTvMxhf = await UFragmentstq4yFTm.decimals.call({from: accounts[0]});
		const boolT0T8Eox = await UFragmentstq4yFTm.rebaseTimeInfo.call({from: accounts[0]});
//		const booljqF5is1 = await UFragmentstq4yFTm.transferFrom.call(addressS0HhWzG, addressTEO0SBj, uintMO3Y1Tm, {from: accounts[0]});

		assert.equal(uint8rTvMxhf, BigInt("0"))
		await expect(UFragmentstq4yFTm.transferFrom.call(addressS0HhWzG, addressTEO0SBj, uintMO3Y1Tm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsrUZtrAs = await UFragments.new({from: accounts[5]});
		const addressibozKVZ = accounts[0]
		const addressvgDQYH = accounts[5]
		const addresstbiFeEq = accounts[0]
		const uintzmXiNOO = BigInt("384")
		const addressNxjpue = accounts[3]
		const uint256h87udy = await UFragmentsrUZtrAs.allowance.call(addressvgDQYH, addressibozKVZ, {from: accounts[3]});
//		const addressz89KQJy = await UFragmentsrUZtrAs.transferOwnership.call(addresstbiFeEq, {from: accounts[1]});
//		const addressiYBlMDy = await UFragmentsrUZtrAs.initRebase.call(addressNxjpue, uintzmXiNOO, {from: accounts[0]});

		assert.equal(uint256h87udy, BigInt("0"))
		await expect(UFragmentsrUZtrAs.transferOwnership.call(addresstbiFeEq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsPSqVZ20 = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const addressQeLi6q = accounts[0]
		const uint256Tz4nH3g = await UFragmentsPSqVZ20.totalSupply.call({from: accounts[5]});
		const uint256RVS5USD = await UFragmentsPSqVZ20.balanceOf.call(addressQeLi6q, {from: accounts[4]});
		await UFragmentsPSqVZ20.onlyOwner.call({from: accounts[1]});
	});

	it('test for UFragments', async () => {
		const UFragmentstq4yFTm = await UFragments.new({from: accounts[4]});
		const uintgz0eqkN = BigInt("488")
		const addressGL5VPfN = accounts[1]
		const addressaLplXcM = accounts[3]
		const intMAfiMlo = BigInt("-765")
		const intQKaL15l = BigInt("-1983")
		const stringBqixCm6 = await UFragmentstq4yFTm.symbol.call({from: accounts[3]});
		const uint8rTvMxhf = await UFragmentstq4yFTm.decimals.call({from: accounts[0]});
//		const booljqF5is1 = await UFragmentstq4yFTm.transferFrom.call(addressaLplXcM, addressGL5VPfN, uintgz0eqkN, {from: accounts[0]});
//		const int256Bi8kXqf = await UFragmentstq4yFTm.mul.call(intQKaL15l, intMAfiMlo, {from: accounts[3]});

		assert.equal(stringBqixCm6, "")
		assert.equal(uint8rTvMxhf, BigInt("0"))
		await expect(UFragmentstq4yFTm.transferFrom.call(addressaLplXcM, addressGL5VPfN, uintgz0eqkN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentswIZgkiK = await UFragments.new({from: accounts[2]});
		const uintyQp9DAF = BigInt("1569")
		const addressRhzYoiW = accounts[4]
		const addressw7dkBIw = await UFragmentswIZgkiK.owner.call({from: accounts[5]});
//		const boolz5KbH1D = await UFragmentswIZgkiK.transfer.call(addressRhzYoiW, uintyQp9DAF, {from: accounts[1]});

		assert.equal(addressw7dkBIw, 0x0000000000000000000000000000000000000000)
		await expect(UFragmentswIZgkiK.transfer.call(addressRhzYoiW, uintyQp9DAF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentswIZgkiK = await UFragments.new({from: accounts[2]});
		const uintRMBwav = BigInt("1569")
		const addressqV7tSAe = accounts[4]
		const uint256acp0kON = await UFragmentswIZgkiK.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const addressI3VD7Ik = await UFragmentswIZgkiK.owner.call({from: accounts[5]});
//		const boolz5KbH1D = await UFragmentswIZgkiK.transfer.call(addressqV7tSAe, uintRMBwav, {from: accounts[1]});
//		const uint256plGKPHw = await UFragmentswIZgkiK.totalSupply.call({from: accounts[4]});
//		const uint256pVsIQO = await UFragmentswIZgkiK.calRebase.call({from: accounts[5]});
//		const uint256ZPDF1fk = await UFragmentswIZgkiK.calRebase.call({from: accounts[0]});

		assert.equal(addressI3VD7Ik, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256acp0kON, BigInt("0"))
		await expect(UFragmentswIZgkiK.transfer.call(addressqV7tSAe, uintRMBwav, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsGK6xXR5 = await UFragments.new({from: accounts[1]});
		const uinthhpMz1D = BigInt("762")
		const addressc76TSDk = accounts[5]
		const intu4M2PGu = BigInt("-1370")
		const intNqna5r4 = BigInt("839")
		const intAD3bSxg = BigInt("-837")
		const intU2HpnHC = BigInt("1604")
		const stringhSU5P3r = await UFragmentsGK6xXR5.name.call({from: accounts[4]});
		const boolidqmHME = await UFragmentsGK6xXR5.approve.call(addressc76TSDk, uinthhpMz1D, {from: accounts[2]});
//		const int256u2wfwOq = await UFragmentsGK6xXR5.mul.call(intNqna5r4, intu4M2PGu, {from: accounts[0]});
//		const int256DLRSEG = await UFragmentsGK6xXR5.sub.call(intU2HpnHC, intAD3bSxg, {from: accounts[3]});
//		await UFragmentsGK6xXR5.initializer.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolidqmHME, true)
		assert.equal(stringhSU5P3r, "")
		await expect(UFragmentsGK6xXR5.mul.call(intNqna5r4, intu4M2PGu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})