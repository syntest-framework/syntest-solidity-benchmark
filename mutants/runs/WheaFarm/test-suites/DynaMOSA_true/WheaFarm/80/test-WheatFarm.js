const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringVqOpAk1 = "MLJXsRMP2uW95E95bPchES9pYpc5Jw8t4I94hdjo7KBsx5lRsmYME6ci2Ntfh8hPPu48qjfY5w5a"
		const stringbrHq5zq = "zhNURpgOVDgfk98msEpbETj"
		const uintKl5O0bE = BigInt("432")
		const WheatFarmNzjPE1 = await WheatFarm.new(stringVqOpAk1, stringbrHq5zq, uintKl5O0bE, {from: accounts[1]});
		const addressrwY9F99 = accounts[3]
		const addresst6TGm5U = accounts[2]
		const uintb04aTv = BigInt("542")
		const addressbvTjIio = accounts[1]
		const uintOtSylPh = await WheatFarmNzjPE1.allowance.call(addresst6TGm5U, addressrwY9F99, {from: accounts[2]});
		const uint8aOzUiuw = await WheatFarmNzjPE1.decimals.call({from: accounts[0]});
		const boolSelvq5O = await WheatFarmNzjPE1.approveAndCall.call(addressbvTjIio, uintb04aTv, {from: accounts[0]});

		assert.equal(uint8aOzUiuw, BigInt("18"))
		assert.equal(uintOtSylPh, BigInt("0"))
		await expect(WheatFarmNzjPE1.approveAndCall.call(addressbvTjIio, uintb04aTv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringTQMpwoS = "ABHnNj3gdod8OwW7DCgSI1zoN4I1EVmP0YNiOA2dhaCPJ66j1VXL6za8XmtmMWpQy6MPg42R"
		const stringHyfzScK = "y6CStnt"
		const uintHCH9Fl = BigInt("1631")
		const WheatFarmJQQSBLA = await WheatFarm.new(stringTQMpwoS, stringHyfzScK, uintHCH9Fl, {from: accounts[4]});
		const uintPRGYSIj = BigInt("1226")
		const addressMOGChD = accounts[1]
		const uintxqLOG4j = BigInt("382")
		const addressPwP8SL4 = accounts[4]
		const addressykLvMEt = "0x0000000000000000000000000000000000000001"
		const boolbaIICyW = await WheatFarmJQQSBLA.approve.call(addressMOGChD, uintPRGYSIj, {from: accounts[2]});
		const boolN0a9ik = await WheatFarmJQQSBLA.approve.call(addressPwP8SL4, uintxqLOG4j, {from: accounts[1]});
		const boolDrykssA = await WheatFarmJQQSBLA.transferownership.call(addressykLvMEt, {from: accounts[1]});
		const uint8hDP15D6 = await WheatFarmJQQSBLA.decimals.call({from: accounts[2]});
		const uint8ymDR43u = await WheatFarmJQQSBLA.decimals.call({from: accounts[3]});

		assert.equal(boolN0a9ik, true)
		assert.equal(boolbaIICyW, true)
		await expect(WheatFarmJQQSBLA.transferownership.call(addressykLvMEt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringk4KXMaa = "gzOop7BemJhYrV4e8vugDCIp87Vn5PTkh"
		const stringc6j8ntY = "io1u70iwyjvowIEfTSjiNjd94"
		const uintyTRCv04 = BigInt("953")
		const WheatFarmf0MMUK1 = await WheatFarm.new(stringk4KXMaa, stringc6j8ntY, uintyTRCv04, {from: accounts[1]});
		const uintde4C6fv = BigInt("1607")
		const addressIF6DtuL = accounts[2]
		const addresswagUugs = accounts[3]
		const uintiaG3d58 = BigInt("1832")
		const addressf0qwDV = accounts[3]
		const uintnAdSs4q = BigInt("89")
		const addressLsZvNKE = accounts[1]
		const addressrnTAdt = accounts[1]
		const stringgrc2ybN = await WheatFarmf0MMUK1.symbol.call({from: accounts[5]});
		const uint8aLDJKe = await WheatFarmf0MMUK1.decimals.call({from: accounts[4]});
		const boolGhkwhuI = await WheatFarmf0MMUK1.transferFrom.call(addresswagUugs, addressIF6DtuL, uintde4C6fv, {from: accounts[5]});
		const boolEfpv6Y = await WheatFarmf0MMUK1.decreaseAllowance.call(addressf0qwDV, uintiaG3d58, {from: accounts[4]});
		const boolryx1rAa = await WheatFarmf0MMUK1.transferFrom.call(addressrnTAdt, addressLsZvNKE, uintnAdSs4q, {from: accounts[4]});

		assert.equal(stringgrc2ybN, "io1u70iwyjvowIEfTSjiNjd94")
		assert.equal(uint8aLDJKe, BigInt("18"))
		await expect(WheatFarmf0MMUK1.transferFrom.call(addresswagUugs, addressIF6DtuL, uintde4C6fv, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringxXnE7Rp = "vbGCHjllJ65UPHAIlijDKJJC5G458VHVkg8LhVfd3cO4mHVhvBYtJtax7NGm3nYwLhTPKwJcHiCP55knDROiQXGdjFH"
		const stringoLL3sHG = "H7mAMJgT5oMlsCrwTQfZQSN3RtrB2Wy7g9qyZOnPEUE2XJOBAntVbcgNkWODZeO7MH65BDK6i4"
		const uintcrwZVyt = BigInt("839")
		const WheatFarmnBVPo84 = await WheatFarm.new(stringxXnE7Rp, stringoLL3sHG, uintcrwZVyt, {from: accounts[4]});
		const addressk3RfUU = accounts[4]
		const addressKUbLumG = "0x0000000000000000000000000000000000000001"
		const uintVK40yGF = BigInt("1429")
		const addressinM5Af = accounts[2]
		const uint8OFN0R = BigInt("83")
		const addressYbvupRw = accounts[2]
		const addressNdsGEta = accounts[2]
		const addressi4vqjc5 = accounts[2]
		const uintKZD9H6n = await WheatFarmnBVPo84.allowance.call(addressKUbLumG, addressk3RfUU, {from: accounts[5]});
		const boolXVCaHgG = await WheatFarmnBVPo84.transfer.call(addressinM5Af, uintVK40yGF, {from: accounts[4]});
		const stringmbfX5ZN = await WheatFarmnBVPo84.symbol.call({from: accounts[1]});
		const boolcfCz2cl = await WheatFarmnBVPo84.transferFrom.call(addressNdsGEta, addressYbvupRw, uint8OFN0R, {from: accounts[4]});
		const uintRgQw5bv = await WheatFarmnBVPo84.balanceOf.call(addressi4vqjc5, {from: accounts[3]});

		assert.equal(boolXVCaHgG, true)
		assert.equal(stringmbfX5ZN, "H7mAMJgT5oMlsCrwTQfZQSN3RtrB2Wy7g9qyZOnPEUE2XJOBAntVbcgNkWODZeO7MH65BDK6i4")
		assert.equal(uintKZD9H6n, BigInt("0"))
		await expect(WheatFarmnBVPo84.transferFrom.call(addressNdsGEta, addressYbvupRw, uint8OFN0R, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringVqOpAk1 = "MLJXsRMP2uW95E95bPchES9pYpc5Jw8t4I94hdjo7KBsx5lRsmYME6ci2Ntfh8hPPu48qjfY5w5a"
		const stringbrHq5zq = "zhNURpgOVDgfk98msEpbETj"
		const uintldOKWTn = BigInt("432")
		const WheatFarmNzjPE1 = await WheatFarm.new(stringVqOpAk1, stringbrHq5zq, uintldOKWTn, {from: accounts[1]});
		const addressWQjf1gC = accounts[3]
		const addresssnCxsQm = accounts[2]
		const uintIpJK1jU = BigInt("1937")
		const addressF2sDmc1 = accounts[3]
		const uintKH5k8S = BigInt("973")
		const addressN6aCuRb = accounts[4]
		const uintOtSylPh = await WheatFarmNzjPE1.allowance.call(addresssnCxsQm, addressWQjf1gC, {from: accounts[2]});
		const booljFO4AOm = await WheatFarmNzjPE1.increaseAllowance.call(addressF2sDmc1, uintIpJK1jU, {from: accounts[2]});
		const boolSEw6IAl = await WheatFarmNzjPE1.approve.call(addressN6aCuRb, uintKH5k8S, {from: accounts[1]});
		const uint8aOzUiuw = await WheatFarmNzjPE1.decimals.call({from: accounts[0]});

		assert.equal(uintOtSylPh, BigInt("0"))
		await expect(WheatFarmNzjPE1.increaseAllowance.call(addressF2sDmc1, uintIpJK1jU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringK4e4Ra6 = "0yCEZ3uJqeMfWrDvYJM3F8RzAxuLbWsQYnWP5oSQJDTcE3yLwacdOXcmUsvb5DSUtjJLkbwSIeWW"
		const stringFbe7Y2Y = "Usvsr1"
		const uintrIUuZm3 = BigInt("1833")
		const WheatFarmp2zAMl = await WheatFarm.new(stringK4e4Ra6, stringFbe7Y2Y, uintrIUuZm3, {from: "0x0000000000000000000000000000000000000001"});
		const uintfnBROA7 = BigInt("784")
		const addressOfwXLTZ = accounts[5]
		const uintELlGmuQ = BigInt("1966")
		const addressoQAATBg = accounts[2]
		const addresshjdlUem = accounts[1]
		const addressG8hmADz = accounts[3]
		const stringSSFgwW5 = await WheatFarmp2zAMl.name.call({from: accounts[3]});
		const boolBb2NzH3 = await WheatFarmp2zAMl.approve.call(addressOfwXLTZ, uintfnBROA7, {from: accounts[3]});
		const uintTLphFIi = await WheatFarmp2zAMl.totalSupply.call({from: accounts[0]});
		const boolFDsWjr3 = await WheatFarmp2zAMl.transferFrom.call(addresshjdlUem, addressoQAATBg, uintELlGmuQ, {from: accounts[0]});
		const uintRvto3jx = await WheatFarmp2zAMl.balanceOf.call(addressG8hmADz, {from: accounts[1]});
	});

	it('test for WheatFarm', async () => {
		const stringi1cHGm0 = "hr7oX9UYP2OQWHcW7To9EuEwHp5F9IOUd9buOTHl0ufk8cMXygGUGvX5moQVVtbQV2duOlUKVX6tbrBBkFLIX"
		const string6uOR5H = "9VEN57wpKVhNHWvBdTmPejOwEIBRvnkrF2kQPxsg6Xyrvv0DvI8DpdjJIOtTfDLXQ1GgDbhsSDA1q1RPsTCGQjzs6MRTJj7pt"
		const uintMwtCnHQ = BigInt("191")
		const WheatFarmZWxTwWL = await WheatFarm.new(stringi1cHGm0, string6uOR5H, uintMwtCnHQ, {from: accounts[5]});
		const uintUxD7VsT = BigInt("736")
		const addressRMzJTpB = accounts[0]
		const uintllC4EVW = BigInt("1790")
		const addressdCSHBp7 = accounts[1]
		const addressk9zVmE = "0x0000000000000000000000000000000000000001"
		const boolascSpx3 = await WheatFarmZWxTwWL.transfer.call(addressRMzJTpB, uintUxD7VsT, {from: accounts[1]});
		const boolyMVFhXR = await WheatFarmZWxTwWL.approve.call(addressdCSHBp7, uintllC4EVW, {from: accounts[0]});
		const stringRuM4mJF = await WheatFarmZWxTwWL.symbol.call({from: accounts[5]});
		const boolMYpBMBk = await WheatFarmZWxTwWL.transferownership.call(addressk9zVmE, {from: accounts[1]});
		const uintzESHnMm = await WheatFarmZWxTwWL.totalSupply.call({from: accounts[2]});

		await expect(WheatFarmZWxTwWL.transfer.call(addressRMzJTpB, uintUxD7VsT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringSQcxlb = "FSXn5vJFltV0MR"
		const stringOqWX7I = "LgRYfew3Kff8B8ntv0HY2doKMtFLpUKRR0X4QlT4qxT1TRB9JmV2C2gNvteQ"
		const uintARnk6bs = BigInt("235")
		const WheatFarmHS3WIp4 = await WheatFarm.new(stringSQcxlb, stringOqWX7I, uintARnk6bs, {from: accounts[0]});
		const uintLF99RlF = BigInt("261")
		const addressS2vbutq = accounts[1]
		const uintUImFRbw = BigInt("0")
		const addresso4O2nTy = accounts[1]
		const uintGZzezm1 = BigInt("1100")
		const addressmz97Omm = accounts[1]
		const addresssEaylYf = accounts[4]
		const boolyAmktXh = await WheatFarmHS3WIp4.transfer.call(addressS2vbutq, uintLF99RlF, {from: accounts[0]});
		const boolGzT7xRT = await WheatFarmHS3WIp4.transfer.call(addresso4O2nTy, uintUImFRbw, {from: "0x0000000000000000000000000000000000000001"});
		const boolr7lcehG = await WheatFarmHS3WIp4.transferFrom.call(addresssEaylYf, addressmz97Omm, uintGZzezm1, {from: accounts[1]});

		assert.equal(boolGzT7xRT, true)
		assert.equal(boolyAmktXh, true)
		await expect(WheatFarmHS3WIp4.transferFrom.call(addresssEaylYf, addressmz97Omm, uintGZzezm1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringSQcxlb = "FSXn5vJFltV0MR"
		const stringOqWX7I = "LgRYfew3Kff8B8ntv0HY2doKMtFLpUKRR0X4QlT4qxT1TRB9JmV2C2gNvteQ"
		const uintKPnHwbO = BigInt("235")
		const WheatFarmHS3WIp4 = await WheatFarm.new(stringSQcxlb, stringOqWX7I, uintKPnHwbO, {from: accounts[0]});
		const uintrxWxsMk = BigInt("1528")
		const addressMs6Vb6e = accounts[1]
		const uintRAqLShj = BigInt("1613")
		const addressVhrjWkj = accounts[1]
		const uintYyarxX1 = BigInt("786")
		const addressTX9PKdj = accounts[0]
		const boolL1lZ36 = await WheatFarmHS3WIp4.approveAndCall.call(addressMs6Vb6e, uintrxWxsMk, {from: accounts[0]});
		const boolKgzQYvU = await WheatFarmHS3WIp4.approveAndCall.call(addressVhrjWkj, uintRAqLShj, {from: "0x0000000000000000000000000000000000000001"});
		const boolertHGBk = await WheatFarmHS3WIp4.approveAndCall.call(addressTX9PKdj, uintYyarxX1, {from: accounts[2]});

		assert.equal(boolL1lZ36, true)
		await expect(WheatFarmHS3WIp4.approveAndCall.call(addressVhrjWkj, uintRAqLShj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})