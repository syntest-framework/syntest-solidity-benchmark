const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringenqmdv = "RPcf93Poadcly5gHLOmqqWgCcuCvnrIeeM0yJ4LYLlWUnIrqdaTC5e34WkAzarc0V8G"
		const stringC9CZlvP = "HmIvKWLY40fAgsSLaadFj7dlJjqx5i4tFjoHdAgHXSkysroPA6FteuxaW4L3yAlYmo7NM9LFAsAjPUKvcfVfh"
		const uintFjP3el1 = BigInt("1809")
		const WheatFarmJuyti7l = await WheatFarm.new(stringenqmdv, stringC9CZlvP, uintFjP3el1, {from: accounts[4]});
		const addressDf2cyY = accounts[1]
		const addressEx8BHX7 = accounts[2]
		const uintEZsXgYU = BigInt("1539")
		const addressAq3dLTR = accounts[2]
		const addressKbJD0st = accounts[4]
		const uintjyGhBe = BigInt("939")
		const addresssrAuUmx = accounts[4]
		const addressoI6lhy8 = "0x0000000000000000000000000000000000000001"
		const uint2bWS4K = BigInt("1138")
		const addressldDfFpU = accounts[0]
		const uintejKskEd = await WheatFarmJuyti7l.allowance.call(addressEx8BHX7, addressDf2cyY, {from: accounts[3]});
//		const boolCA94uGw = await WheatFarmJuyti7l.increaseAllowance.call(addressAq3dLTR, uintEZsXgYU, {from: accounts[0]});
//		const uintwimWJSB = await WheatFarmJuyti7l.balanceOf.call(addressKbJD0st, {from: accounts[3]});
//		const boolEcNTVD = await WheatFarmJuyti7l.transferFrom.call(addressoI6lhy8, addresssrAuUmx, uintjyGhBe, {from: accounts[4]});
//		const booldKJpMPS = await WheatFarmJuyti7l.transfer.call(addressldDfFpU, uint2bWS4K, {from: accounts[3]});

		assert.equal(uintejKskEd, BigInt("0"))
		await expect(WheatFarmJuyti7l.increaseAllowance.call(addressAq3dLTR, uintEZsXgYU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringp2CnfEr = "4ERYtRYrIhlUW6eL7ybZslgtqOfliVs3MQ6S7M7CeQnLy1ecyX44Rhp7J5SxbQwcjGzo"
		const stringsvJEw2A = "AdUIL8hFoGXk5koCyWuvZQXDCm6oqdz25voRpJpOuShsgQWICfcz2iw"
		const uintnFIdsXu = BigInt("985")
		const WheatFarmXhgmegT = await WheatFarm.new(stringp2CnfEr, stringsvJEw2A, uintnFIdsXu, {from: "0x0000000000000000000000000000000000000001"});
		const addressYkSwZJE = accounts[0]
		const uintEUAjTjq = BigInt("871")
		const addressiapLCbr = accounts[2]
		const addressLObFPHd = accounts[3]
		const boolKLee4jX = await WheatFarmXhgmegT.transferownership.call(addressYkSwZJE, {from: accounts[1]});
		const boolSisGpcZ = await WheatFarmXhgmegT.transferFrom.call(addressLObFPHd, addressiapLCbr, uintEUAjTjq, {from: accounts[1]});
		const stringGERQ74z = await WheatFarmXhgmegT.symbol.call({from: accounts[3]});
		const stringOU407eo = await WheatFarmXhgmegT.symbol.call({from: accounts[2]});
	});

	it('test for WheatFarm', async () => {
		const stringERJmVM9 = "i6UJeQXDqqlvMWL80JZwqoCoETMwUmpRq231WEAdVpjTukSmWCJ1uHgUaYedjW3TCjNmJMHzTczDSdzqjuPkjLKybb9kSS8i9qA"
		const stringNjhfX9J = "HhFoFMSwjeCiFlGeIH9VgjkTAsU518GNUbOD"
		const uintwF2gG6F = BigInt("228")
		const WheatFarmHoEg9lQ = await WheatFarm.new(stringERJmVM9, stringNjhfX9J, uintwF2gG6F, {from: accounts[2]});
		const uintIOdt311 = BigInt("1369")
		const addressnCHWkdN = accounts[0]
		const uint0ImVrf = BigInt("913")
		const addressvZ3mYv9 = accounts[4]
		const boolMkDDwFH = await WheatFarmHoEg9lQ.approve.call(addressnCHWkdN, uintIOdt311, {from: accounts[0]});
		const uintg752TY1 = await WheatFarmHoEg9lQ.totalSupply.call({from: accounts[4]});
		const boolvWwaEGp = await WheatFarmHoEg9lQ.approve.call(addressvZ3mYv9, uint0ImVrf, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolMkDDwFH, true)
		assert.equal(boolvWwaEGp, true)
		assert.equal(uintg752TY1, BigInt("228000000000000000000"))
	});

	it('test for WheatFarm', async () => {
		const stringpZ3YVzq = "F4LtpPhPhWoBClX0R"
		const stringgicxxjY = "e1rZRuy8U4q9vi7Yp5aWgJLGgHxhtC3q"
		const uintSSJ6Cnt = BigInt("1103")
		const WheatFarmp2PXFOb = await WheatFarm.new(stringpZ3YVzq, stringgicxxjY, uintSSJ6Cnt, {from: accounts[4]});
		const uintK611iCU = BigInt("356")
		const addressewc3JsI = accounts[4]
		const addresshmF71BR = accounts[5]
		const uintUJv22Dy = BigInt("1364")
		const addressYHJ9fus = accounts[0]
		const addressFpV6s0 = accounts[3]
		const uintlyN8LgK = BigInt("232")
		const addressiSyBPfb = accounts[1]
		const addressvbpX42A = accounts[0]
		const uintQSyXSVD = BigInt("709")
		const addressok2U4W = "0x0000000000000000000000000000000000000001"
		const addressnYYeb1j = accounts[2]
//		const boolbpSZle = await WheatFarmp2PXFOb.transferFrom.call(addresshmF71BR, addressewc3JsI, uintK611iCU, {from: accounts[3]});
//		const boolCBK6d4U = await WheatFarmp2PXFOb.approve.call(addressYHJ9fus, uintUJv22Dy, {from: "0x0000000000000000000000000000000000000001"});
//		const boolYHjw8uj = await WheatFarmp2PXFOb.transferownership.call(addressFpV6s0, {from: accounts[4]});
//		const boolh0Udcy4 = await WheatFarmp2PXFOb.transferFrom.call(addressvbpX42A, addressiSyBPfb, uintlyN8LgK, {from: accounts[5]});
//		const boolajcY36 = await WheatFarmp2PXFOb.transferFrom.call(addressnYYeb1j, addressok2U4W, uintQSyXSVD, {from: accounts[1]});

		await expect(WheatFarmp2PXFOb.transferFrom.call(addresshmF71BR, addressewc3JsI, uintK611iCU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringwKHrMS = "l96ruzwK8zwIJwqdTEnBz7FUiHJoMRHQnkm2LGdptI5GqchEnZ5Yl7tHV"
		const string261DOk = "ip5CRsgWAy3fbl6PLoGTFWaL2FwrIphE2vIxbcn5qnWuPTwVmeeNZ5SyiWTrZD22FjeLpOwx9oy"
		const uintIRbVZTy = BigInt("615")
		const WheatFarmlhW2bS = await WheatFarm.new(stringwKHrMS, string261DOk, uintIRbVZTy, {from: accounts[4]});
		const uintwTNUyrV = BigInt("1400")
		const addressoThuJkx = accounts[1]
		const uintJeIoMHT = BigInt("1045")
		const addressQiRqUgQ = "0x0000000000000000000000000000000000000001"
		const uintpuNmlIM = BigInt("177")
		const addressMV1fPN8 = accounts[1]
		const uint8EqsCCI = await WheatFarmlhW2bS.decimals.call({from: accounts[0]});
		const boolP1VMQsH = await WheatFarmlhW2bS.approve.call(addressoThuJkx, uintwTNUyrV, {from: accounts[0]});
		const bool6JYM6L = await WheatFarmlhW2bS.approve.call(addressQiRqUgQ, uintJeIoMHT, {from: accounts[4]});
		const booljVs9Jhg = await WheatFarmlhW2bS.approveAndCall.call(addressMV1fPN8, uintpuNmlIM, {from: accounts[4]});

		assert.equal(bool6JYM6L, true)
		assert.equal(boolP1VMQsH, true)
		assert.equal(booljVs9Jhg, true)
		assert.equal(uint8EqsCCI, BigInt("18"))
	});

	it('test for WheatFarm', async () => {
		const stringm6DRSoS = "YfmvRcNtnbmak1KwSc3MBl9fgu3w2jBN3QxFyxTHmZX2XQlIcbXK3xbtJIPIRHXc"
		const stringV6EKGR6 = "LTR4M42Mr2s0o2PRmR425CrGambMEb1fpY71nvXc1"
		const uintOFYkQSw = BigInt("24")
		const WheatFarmTwLNZdM = await WheatFarm.new(stringm6DRSoS, stringV6EKGR6, uintOFYkQSw, {from: accounts[1]});
		const addressHElsfSk = accounts[0]
//		const booldY0I0Hm = await WheatFarmTwLNZdM.transferownership.call(addressHElsfSk, {from: accounts[0]});
//		const stringgXQt9Bx = await WheatFarmTwLNZdM.symbol.call({from: accounts[1]});
//		const uintIS1Crhv = await WheatFarmTwLNZdM.totalSupply.call({from: accounts[3]});

		await expect(WheatFarmTwLNZdM.transferownership.call(addressHElsfSk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringZ6BXf2p = "56FIlAE7xaRLe3dKKXgkHZMekU9rY1i84uRJtthUafji7O4Tn9alaAXhQxB"
		const stringF43z5z8 = "QEbed87vNYALXAqIBeR"
		const uintbUUEAic = BigInt("163")
		const WheatFarmAUVRhYw = await WheatFarm.new(stringZ6BXf2p, stringF43z5z8, uintbUUEAic, {from: accounts[3]});
		const uintBOimsA = BigInt("1612")
		const addressH8iXWKJ = accounts[4]
		const uintoZanQSl = BigInt("1925")
		const addressg5ixf44 = accounts[3]
		const uintOJa7BN = BigInt("1972")
		const addresstJqXg1I = accounts[1]
		const boolEgscRY2 = await WheatFarmAUVRhYw.approve.call(addressH8iXWKJ, uintBOimsA, {from: accounts[1]});
//		const boolJeeVLE1 = await WheatFarmAUVRhYw.transfer.call(addressg5ixf44, uintoZanQSl, {from: accounts[0]});
//		const booliNS7R8Z = await WheatFarmAUVRhYw.increaseAllowance.call(addresstJqXg1I, uintOJa7BN, {from: "0x0000000000000000000000000000000000000001"});
//		const stringszQW4JV = await WheatFarmAUVRhYw.name.call({from: accounts[5]});
//		const stringK1C4eIc = await WheatFarmAUVRhYw.name.call({from: accounts[4]});
//		const uintojguDh2 = await WheatFarmAUVRhYw.totalSupply.call({from: accounts[1]});

		assert.equal(boolEgscRY2, true)
		await expect(WheatFarmAUVRhYw.transfer.call(addressg5ixf44, uintoZanQSl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringAtpI5A = "IsJeRr7iZBARFHbUSCEJRcSMZdFDYVRowmdBgZqJJV8gnTO6v3Jaz22SoASR83G2Nl8EJAB3XIcLcQ1u5QNyIOf"
		const stringeuuPSRg = "r5goctEiUgoSSkwPAHeW4VW0U9UDVqmFPl96ZQilF"
		const uintKx2YTVd = BigInt("235")
		const WheatFarmhZHBtG2 = await WheatFarm.new(stringAtpI5A, stringeuuPSRg, uintKx2YTVd, {from: accounts[2]});
		const addressMkK0lle = accounts[4]
		const uintqzoSVAM = BigInt("1618")
		const addresslBpve1M = accounts[4]
		const uintSKSMSi = BigInt("1863")
		const addresslLIaxXx = accounts[3]
		const uintf02a8Au = BigInt("229")
		const addressUHSvBcF = accounts[2]
		const addressR5OLGCB = accounts[5]
		const uintfJVxQkY = await WheatFarmhZHBtG2.balanceOf.call(addressMkK0lle, {from: "0x0000000000000000000000000000000000000001"});
//		const boolj99yKa = await WheatFarmhZHBtG2.transfer.call(addresslBpve1M, uintqzoSVAM, {from: accounts[3]});
//		const boolhPx0LXb = await WheatFarmhZHBtG2.transfer.call(addresslLIaxXx, uintSKSMSi, {from: accounts[1]});
//		const boolW8GZ8BX = await WheatFarmhZHBtG2.transferFrom.call(addressR5OLGCB, addressUHSvBcF, uintf02a8Au, {from: accounts[0]});

		assert.equal(uintfJVxQkY, BigInt("0"))
		await expect(WheatFarmhZHBtG2.transfer.call(addresslBpve1M, uintqzoSVAM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringwKHrMS = "l96ruzwK8zwIJwqdTEnBz7FUiHJoMRHQnkm2LGdptI5GqchEnZ5Yl7tHV"
		const string261DOk = "ip5CRsgWAy3fbl6PLoGTFWaL2FwrIphE2vIxbcn5qnWuPTwVmeeNZ5SyiWTrZD22FjeLpOwx9oy"
		const uintL6hQs4s = BigInt("615")
		const WheatFarmlhW2bS = await WheatFarm.new(stringwKHrMS, string261DOk, uintL6hQs4s, {from: accounts[4]});
		const uintnvEd1ct = BigInt("1040")
		const addresscUHHZfJ = "0x00000000000000000000000000000000000000-1"
		const uintKfH0wFh = BigInt("177")
		const addressEXSmuPO = accounts[1]
		const uint8EqsCCI = await WheatFarmlhW2bS.decimals.call({from: accounts[0]});
//		const bool6JYM6L = await WheatFarmlhW2bS.approve.call(addresscUHHZfJ, uintnvEd1ct, {from: accounts[4]});
//		const booljVs9Jhg = await WheatFarmlhW2bS.approveAndCall.call(addressEXSmuPO, uintKfH0wFh, {from: accounts[4]});

		assert.equal(uint8EqsCCI, BigInt("18"))
		await expect(WheatFarmlhW2bS.approve.call(addresscUHHZfJ, uintnvEd1ct, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringm6DRSoS = "YfmvRcNtnbmak1KwSc3MBl9fgu3w2jBN3QxFyxTHmZX2XQlIcbXK3xbtJIPIRHXc"
		const stringV6EKGR6 = "LTR4M42Mr2s0o2PRmR425CrGambMEb1fpY71nvXc1"
		const uintYbokfCk = BigInt("24")
		const WheatFarmTwLNZdM = await WheatFarm.new(stringm6DRSoS, stringV6EKGR6, uintYbokfCk, {from: accounts[1]});
		const uinthiLaDhy = BigInt("140")
		const addressOXAtBEu = accounts[0]
		const addressf71QQUq = accounts[1]
		const uintQlXgIqS = BigInt("211")
		const addressR2douKq = accounts[5]
		const addressyOtMB0d = "0x0000000000000000000000000000000000000001"
		const addresskBROK1i = accounts[2]
		const boolyfgp8SG = await WheatFarmTwLNZdM.transfer.call(addressOXAtBEu, uinthiLaDhy, {from: accounts[1]});
		const boolG2GcLPz = await WheatFarmTwLNZdM.transferownership.call(addressf71QQUq, {from: accounts[1]});
//		const boolICIHWq4 = await WheatFarmTwLNZdM.transferFrom.call(addressyOtMB0d, addressR2douKq, uintQlXgIqS, {from: "0x0000000000000000000000000000000000000001"});
//		const booldY0I0Hm = await WheatFarmTwLNZdM.transferownership.call(addresskBROK1i, {from: accounts[0]});

		assert.equal(boolG2GcLPz, true)
		assert.equal(boolyfgp8SG, true)
		await expect(WheatFarmTwLNZdM.transferFrom.call(addressyOtMB0d, addressR2douKq, uintQlXgIqS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringh8AkLbu = "puPgkFrTSQ9mgaTwOvHMn3kbREYVBxk5Bd8mz982917INUzJodOZqIAgxKGrTUFHk2NKL8EAoXvSCb3fDegCwzgRUN"
		const stringw4nSmST = "SMDFjKy2R4ANSsIEfJRL1nNUadnvYdwBFGYyKQQ8UO4UPRy5Jlhqz8dvunq1vlDFSStjSBKmJc0yb"
		const uintFj81OTx = BigInt("1291")
		const WheatFarmEGK6Qzk = await WheatFarm.new(stringh8AkLbu, stringw4nSmST, uintFj81OTx, {from: accounts[2]});
		const uintPyVRvk = BigInt("0")
		const addressnN7L1f = accounts[1]
		const addressqqyZyvA = accounts[1]
		const boolY4b5Wqd = await WheatFarmEGK6Qzk.transferFrom.call(addressqqyZyvA, addressnN7L1f, uintPyVRvk, {from: accounts[2]});

		assert.equal(boolY4b5Wqd, true)
	});
})