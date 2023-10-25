const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentskumOu4r = await UFragments.new({from: accounts[3]});
//		const uint256aFyWiwM = await UFragmentskumOu4r.calRebase.call({from: accounts[3]});
//		await UFragmentskumOu4r.onlyOwner.call({from: accounts[0]});

		await expect(UFragmentskumOu4r.calRebase.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentszZosrzE = await UFragments.new({from: accounts[4]});
		const intyn4pHDO = BigInt("-1409")
		const intBuNG8jU = BigInt("-590")
		const intVu4wtu8 = BigInt("666")
		const intXOWJRIG = BigInt("1444")
		const int4QqwKw = BigInt("-210")
		const intWXsIRFO = BigInt("-1747")
//		const int256sOa7zsZ = await UFragmentszZosrzE.add.call(intBuNG8jU, intyn4pHDO, {from: accounts[2]});
//		const int256m9Uk4n = await UFragmentszZosrzE.div.call(intXOWJRIG, intVu4wtu8, {from: accounts[3]});
//		const int256HTmN4SM = await UFragmentszZosrzE.sub.call(intWXsIRFO, int4QqwKw, {from: accounts[4]});
//		await UFragmentszZosrzE.renounceOwnership.call({from: accounts[4]});

		await expect(UFragmentszZosrzE.add.call(intBuNG8jU, intyn4pHDO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsQ8hp3Ca = await UFragments.new({from: accounts[5]});
		const uintYnjFKzC = BigInt("1587")
		const addresswtiUewa = accounts[4]
		const addressIY7m9z = "0x0000000000000000000000000000000000000001"
//		const boolTQlbdvl = await UFragmentsQ8hp3Ca.transferFrom.call(addressIY7m9z, addresswtiUewa, uintYnjFKzC, {from: accounts[0]});
//		const stringroh5yfc = await UFragmentsQ8hp3Ca.name.call({from: accounts[4]});

		await expect(UFragmentsQ8hp3Ca.transferFrom.call(addressIY7m9z, addresswtiUewa, uintYnjFKzC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsVEZQg7p = await UFragments.new({from: accounts[4]});
		const intbfVT7Bb = BigInt("454")
		const intg7N8349 = BigInt("278")
		const intqUjcRqo = BigInt("-588")
		const intjzdolkk = BigInt("-2001")
		const stringnMehsPG = await UFragmentsVEZQg7p.symbol.call({from: accounts[2]});
//		const int256QgndS6M = await UFragmentsVEZQg7p.add.call(intg7N8349, intbfVT7Bb, {from: accounts[0]});
//		const uint256BCQsCtR = await UFragmentsVEZQg7p.calRebase.call({from: accounts[2]});
//		const int256ZoWRmI1 = await UFragmentsVEZQg7p.sub.call(intjzdolkk, intqUjcRqo, {from: accounts[0]});

		assert.equal(stringnMehsPG, "")
		await expect(UFragmentsVEZQg7p.add.call(intg7N8349, intbfVT7Bb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentseuNjbS5 = await UFragments.new({from: accounts[5]});
		const intJVSfrv = BigInt("-632")
		const intg897ZzV = BigInt("161")
		const uint256CIfGIF = await UFragmentseuNjbS5.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolXF5W9av = await UFragmentseuNjbS5.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const int256TNK7fHi = await UFragmentseuNjbS5.add.call(intg897ZzV, intJVSfrv, {from: accounts[4]});

		assert.equal(boolXF5W9av, false)
		assert.equal(uint256CIfGIF, BigInt("0"))
		await expect(UFragmentseuNjbS5.add.call(intg897ZzV, intJVSfrv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsuAdXwIs = await UFragments.new({from: accounts[2]});
		const uintdmWF1Qk = BigInt("744")
		const addressJ7FKb61 = accounts[3]
		const addressS2Ni8o9 = accounts[5]
		const intVR7llPB = BigInt("2006")
		const intklLD0wx = BigInt("-1093")
		const boolHaST5nX = await UFragmentsuAdXwIs.approve.call(addressJ7FKb61, uintdmWF1Qk, {from: accounts[2]});
		const uint256B9DkZ3R = await UFragmentsuAdXwIs.balanceOf.call(addressS2Ni8o9, {from: accounts[3]});
//		const int256JwF6gcy = await UFragmentsuAdXwIs.mul.call(intklLD0wx, intVR7llPB, {from: accounts[4]});

		assert.equal(boolHaST5nX, true)
		assert.equal(uint256B9DkZ3R, BigInt("0"))
		await expect(UFragmentsuAdXwIs.mul.call(intklLD0wx, intVR7llPB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsqipSwi = await UFragments.new({from: accounts[3]});
		const uintynJFNy = BigInt("1073")
		const addressfAM9guz = accounts[4]
		const addressf7eJYxU = accounts[0]
		const uintkOID1qx = BigInt("779")
		const addressswm7fAo = accounts[5]
		const boolbrPtq47 = await UFragmentsqipSwi.approve.call(addressfAM9guz, uintynJFNy, {from: accounts[3]});
//		const addressmW0NqRm = await UFragmentsqipSwi.initialize.call(addressf7eJYxU, {from: accounts[4]});
//		const addressDopmu5i = await UFragmentsqipSwi.owner.call({from: accounts[1]});
//		const boolutuAVM4 = await UFragmentsqipSwi.transfer.call(addressswm7fAo, uintkOID1qx, {from: accounts[3]});

		assert.equal(boolbrPtq47, true)
		await expect(UFragmentsqipSwi.initialize.call(addressf7eJYxU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsuAdXwIs = await UFragments.new({from: accounts[2]});
		const uintWwjIK5g = BigInt("744")
		const addressOOVAsm6 = accounts[3]
		const addressVz7Ruox = accounts[5]
		const int78W2VF = BigInt("2006")
		const intVGBinpt = BigInt("-1086")
		const boolHaST5nX = await UFragmentsuAdXwIs.approve.call(addressOOVAsm6, uintWwjIK5g, {from: accounts[2]});
		const addressy3b6GfK = await UFragmentsuAdXwIs.owner.call({from: accounts[3]});
		const uint256B9DkZ3R = await UFragmentsuAdXwIs.balanceOf.call(addressVz7Ruox, {from: accounts[3]});
//		const int256JwF6gcy = await UFragmentsuAdXwIs.mul.call(intVGBinpt, int78W2VF, {from: accounts[4]});

		assert.equal(addressy3b6GfK, 0x0000000000000000000000000000000000000000)
		assert.equal(boolHaST5nX, true)
		assert.equal(uint256B9DkZ3R, BigInt("0"))
		await expect(UFragmentsuAdXwIs.mul.call(intVGBinpt, int78W2VF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsuAdXwIs = await UFragments.new({from: accounts[2]});
		const addressQPMqX1F = accounts[2]
		const addressiZofnbx = accounts[1]
		const uintq0yJpoo = BigInt("744")
		const addresspFeOA0x = accounts[3]
		const addressjdiOGMr = accounts[3]
		const uintCksiHD = BigInt("713")
		const addressuOzT3Tz = accounts[1]
		const addressFBKjoU7 = accounts[6]
		const intrQYHigf = BigInt("2006")
		const intGIncM0 = BigInt("-1093")
		const uint256IEokX9u = await UFragmentsuAdXwIs.allowance.call(addressiZofnbx, addressQPMqX1F, {from: accounts[0]});
		const boolHaST5nX = await UFragmentsuAdXwIs.approve.call(addresspFeOA0x, uintq0yJpoo, {from: accounts[2]});
//		const addressmxkkl1b = await UFragmentsuAdXwIs.initialize.call(addressjdiOGMr, {from: "0x0000000000000000000000000000000000000001"});
//		const stringAteqRY = await UFragmentsuAdXwIs.name.call({from: accounts[5]});
//		const booljsPpEeG = await UFragmentsuAdXwIs.transfer.call(addressuOzT3Tz, uintCksiHD, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256B9DkZ3R = await UFragmentsuAdXwIs.balanceOf.call(addressFBKjoU7, {from: accounts[3]});
//		const int256JwF6gcy = await UFragmentsuAdXwIs.mul.call(intGIncM0, intrQYHigf, {from: accounts[4]});

		assert.equal(boolHaST5nX, true)
		assert.equal(uint256IEokX9u, BigInt("0"))
		await expect(UFragmentsuAdXwIs.initialize.call(addressjdiOGMr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsL4N7Pr = await UFragments.new({from: accounts[3]});
		const intftKg2l = BigInt("-151")
		const inteURbykQ = BigInt("1795")
		const intoob3XRo = BigInt("1542")
		const intZhz0jQT = BigInt("1190")
		const stringAKJbiot = await UFragmentsL4N7Pr.name.call({from: accounts[0]});
//		await UFragmentsL4N7Pr.onlyOwner.call({from: accounts[5]});
//		const int256I1FOBTn = await UFragmentsL4N7Pr.div.call(inteURbykQ, intftKg2l, {from: accounts[0]});
//		const int256xBjG09 = await UFragmentsL4N7Pr.mul.call(intZhz0jQT, intoob3XRo, {from: accounts[4]});
//		const addressFICXlx = await UFragmentsL4N7Pr.owner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringAKJbiot, "")
		await expect(UFragmentsL4N7Pr.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentskumOu4r = await UFragments.new({from: accounts[3]});
		const addresst8Ukkmo = "0x00000000000000000000000000000000000000-1"
//		const uint256zwmaFAo = await UFragmentskumOu4r.balanceOf.call(addresst8Ukkmo, {from: accounts[1]});
//		const boolxvUggH7 = await UFragmentskumOu4r.rebaseTimeInfo.call({from: accounts[2]});

		await expect(UFragmentskumOu4r.balanceOf.call(addresst8Ukkmo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentskumOu4r = await UFragments.new({from: accounts[3]});
		const uintc2CCguU = BigInt("132")
		const stringV05pCWM = "ngHRifM"
		const stringpE9Gxuc = "PhfSpj2mVi7gIcStCHS7rqsPvSIKKN8HejVol1MJ8MsHLmKKI9JkqCxcnnLKehFI"
		const stringIPdW65g = await UFragmentskumOu4r.initialize.call(stringpE9Gxuc, stringV05pCWM, uintc2CCguU, {from: accounts[3]});
//		await UFragmentskumOu4r.onlyOwner.call({from: accounts[0]});

		await expect(UFragmentskumOu4r.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentskumOu4r = await UFragments.new({from: accounts[3]});
		const uintZ2jS7ml = BigInt("1647")
		const addressNRDDExn = accounts[3]
		const addressnQnXIJ = "0x0000000000000000000000000000000000000000"
//		const boolKJqeICl = await UFragmentskumOu4r.transfer.call(addressNRDDExn, uintZ2jS7ml, {from: accounts[2]});
//		const uint256zwmaFAo = await UFragmentskumOu4r.balanceOf.call(addressnQnXIJ, {from: accounts[1]});

		await expect(UFragmentskumOu4r.transfer.call(addressNRDDExn, uintZ2jS7ml, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentskumOu4r = await UFragments.new({from: accounts[3]});
		const addresssJXIBpJ = "0x0000000000000000000000000000000000000001"
		const uint8oR09CFq = await UFragmentskumOu4r.decimals.call({from: accounts[1]});
		const uint256zwmaFAo = await UFragmentskumOu4r.balanceOf.call(addresssJXIBpJ, {from: accounts[1]});

		assert.equal(uint256zwmaFAo, BigInt("0"))
		assert.equal(uint8oR09CFq, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsy9Z4ZqN = await UFragments.new({from: accounts[2]});
		const uintbkiKxoC = BigInt("82")
		const addressGQYoPwU = accounts[2]
		const intAs1zm0 = BigInt("-354")
		const intSp2AEjl = BigInt("-1020")
		const uinthPmIkN5 = BigInt("1966")
		const addresszhQFAeG = accounts[2]
		const addressQyQA8Kd = accounts[2]
		const intLiT7pNj = BigInt("1717")
		const intD8lKemi = BigInt("-1113")
		const boolhlKTOPG = await UFragmentsy9Z4ZqN.rebaseTimeInfo.call({from: accounts[0]});
//		const addressD0NX1c5 = await UFragmentsy9Z4ZqN.initRebase.call(addressGQYoPwU, uintbkiKxoC, {from: accounts[4]});
//		const int256WDzBRLz = await UFragmentsy9Z4ZqN.sub.call(intSp2AEjl, intAs1zm0, {from: accounts[0]});
//		const boolS8z6SIF = await UFragmentsy9Z4ZqN.transferFrom.call(addressQyQA8Kd, addresszhQFAeG, uinthPmIkN5, {from: accounts[4]});
//		const int256KQmRbP = await UFragmentsy9Z4ZqN.sub.call(intD8lKemi, intLiT7pNj, {from: accounts[0]});
//		const uint256qjOjDw0 = await UFragmentsy9Z4ZqN.calRebase.call({from: accounts[4]});

		await expect(UFragmentsy9Z4ZqN.initRebase.call(addressGQYoPwU, uintbkiKxoC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsEuul1MQ = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const intKTEMZNk = BigInt("702")
		const intJxwBezY = BigInt("1839")
		const intwrfgPD = BigInt("981")
		const intDKSO7Ll = BigInt("-951")
		const uintjj1YtE2 = BigInt("1564")
		const addressxuUDy5 = accounts[5]
		const addresssxByaTV = accounts[1]
		const int256jxejNCc = await UFragmentsEuul1MQ.sub.call(intJxwBezY, intKTEMZNk, {from: accounts[0]});
		const int256nKoGUG0 = await UFragmentsEuul1MQ.div.call(intDKSO7Ll, intwrfgPD, {from: accounts[1]});
		const uint256fiB0AU = await UFragmentsEuul1MQ.calRebase.call({from: accounts[1]});
		const boolbQITRv2 = await UFragmentsEuul1MQ.transferFrom.call(addresssxByaTV, addressxuUDy5, uintjj1YtE2, {from: accounts[0]});
	});
})