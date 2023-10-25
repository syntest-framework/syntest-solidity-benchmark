const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringmw5Nubo = "7OXnHaAXylUIBx9BbDwH4h7HB2x9bJLIj4zlwbXtokcvjBD"
		const stringMbOrcPV = "5gBhcwOzj4P2kCA29f9V4nDok1woQGi5MZ2jmI5jJ4FoSGGiEe"
		const uint5KitwJ = BigInt("1593")
		const WOLFnaVe8bq = await WOLF.new(stringmw5Nubo, stringMbOrcPV, uint5KitwJ, {from: accounts[2]});
		const uintVjMEAZd = BigInt("951")
		const addresslwUkyj1 = accounts[4]
		const uintZfkMS8Q = BigInt("1618")
		const addressZooWh71 = accounts[4]
		const uintUREpJ1k = BigInt("88")
		const addressiaZEwK = accounts[1]
		const uintGOW1wt5 = BigInt("884")
		const addressAgD6ISL = accounts[2]
		const uintiSsFl1e = BigInt("876")
		const addressePTqYw = accounts[4]
		const uintDvDqEg = BigInt("1891")
		const addressHPjo77S = accounts[0]
		const boolAkVvEl = await WOLFnaVe8bq.transfer.call(addresslwUkyj1, uintVjMEAZd, {from: accounts[0]});
		const boolzcrFX7 = await WOLFnaVe8bq.approve.call(addressZooWh71, uintZfkMS8Q, {from: accounts[1]});
		const boolvUVGBY = await WOLFnaVe8bq.approveAndCall.call(addressiaZEwK, uintUREpJ1k, {from: accounts[4]});
		const booliWJBRR = await WOLFnaVe8bq.approveAndCall.call(addressAgD6ISL, uintGOW1wt5, {from: accounts[3]});
		const booltpq1yvg = await WOLFnaVe8bq.transfer.call(addressePTqYw, uintiSsFl1e, {from: accounts[2]});
		const boolVHK23Fh = await WOLFnaVe8bq.transfer.call(addressHPjo77S, uintDvDqEg, {from: accounts[3]});

		await expect(WOLFnaVe8bq.transfer.call(addresslwUkyj1, uintVjMEAZd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringnoGGIW = "z1O"
		const stringJQnT4dz = "JbPOI5oH0EA7F1SPRiU4KuPyfy8zyMnNyeCPkQDDPta2jn9jSt2Vk0hOXujjyiYRh1ku268PFoXSlHgj"
		const uintcUEsOX4 = BigInt("1126")
		const WOLFMlQOH2U = await WOLF.new(stringnoGGIW, stringJQnT4dz, uintcUEsOX4, {from: accounts[0]});
		const uintvJleLw = BigInt("1168")
		const addressaDjmukk = accounts[5]
		const uinthBEpN2Y = BigInt("645")
		const addressdYOaHrd = accounts[4]
		const uintbCMuvRg = BigInt("1547")
		const addressr4fC5Ok = accounts[0]
		const addressz7IgAyo = accounts[0]
		const boolUwfBN8G = await WOLFMlQOH2U.approve.call(addressaDjmukk, uintvJleLw, {from: accounts[2]});
		const boolfOtdiwG = await WOLFMlQOH2U.approve.call(addressdYOaHrd, uinthBEpN2Y, {from: accounts[1]});
		const boolUGnZDss = await WOLFMlQOH2U.transferFrom.call(addressz7IgAyo, addressr4fC5Ok, uintbCMuvRg, {from: accounts[3]});

		assert.equal(boolUwfBN8G, true)
		assert.equal(boolfOtdiwG, true)
		await expect(WOLFMlQOH2U.transferFrom.call(addressz7IgAyo, addressr4fC5Ok, uintbCMuvRg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringiMMcwKi = "B5SGrARwXGEkO3NfpBLLL4NVj8fkolIPDDFF5k"
		const stringG8yQSbe = "Q5Tg1HdBrrRV8cKIp4c71uOC05uvFYUsnIEtbd49FvxifZ9bSMJ"
		const uint3e1ERw = BigInt("1151")
		const WOLFh3bfQbp = await WOLF.new(stringiMMcwKi, stringG8yQSbe, uint3e1ERw, {from: accounts[0]});
		const uintQBOmSMB = BigInt("400")
		const addressH3DNMzl = accounts[3]
		const addressHOmmupI = accounts[3]
		const uintIFnCTOM = BigInt("1352")
		const addressjT9AUzp = accounts[4]
		const uintCxQY7v2 = BigInt("437")
		const addressBpeaDEH = accounts[1]
		const uintpCjpIIE = BigInt("1406")
		const addressG6yjlb = "0x0000000000000000000000000000000000000001"
		const addressV7Rprxc = accounts[1]
		const uintIMOSGl = BigInt("1956")
		const addressSiVPIa = accounts[2]
		const addressM1EaQe8 = accounts[1]
		const boolnt9X5O9 = await WOLFh3bfQbp.approveAndCall.call(addressH3DNMzl, uintQBOmSMB, {from: accounts[2]});
		const boollFeQJr3 = await WOLFh3bfQbp.transferownership.call(addressHOmmupI, {from: accounts[0]});
		const boolcdGeCYs = await WOLFh3bfQbp.approve.call(addressjT9AUzp, uintIFnCTOM, {from: accounts[2]});
		const boolIResJG4 = await WOLFh3bfQbp.transfer.call(addressBpeaDEH, uintCxQY7v2, {from: accounts[2]});
		const boolEj4fcnb = await WOLFh3bfQbp.transferFrom.call(addressV7Rprxc, addressG6yjlb, uintpCjpIIE, {from: accounts[5]});
		const boolKJMYaht = await WOLFh3bfQbp.transferFrom.call(addressM1EaQe8, addressSiVPIa, uintIMOSGl, {from: accounts[1]});

		await expect(WOLFh3bfQbp.approveAndCall.call(addressH3DNMzl, uintQBOmSMB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringtxkxehN = "nDFbFyn7TMgeilhEh5KNUInAUdQAm788iXo"
		const stringBwRPnCr = "ODByJ"
		const uintWZAUmF = BigInt("50")
		const WOLFbfwW5sK = await WOLF.new(stringtxkxehN, stringBwRPnCr, uintWZAUmF, {from: accounts[1]});
		const addressUjFF6rZ = accounts[0]
		const uintgeSbIGp = BigInt("1510")
		const addressjDubmcF = accounts[1]
		const addressZTYy12A = accounts[5]
		const uintrwewvVa = BigInt("861")
		const addressLxH8lDL = accounts[2]
		const uintHcqUXZb = BigInt("1867")
		const addressZcfhLF1 = accounts[2]
		const booldNPSDX = await WOLFbfwW5sK.transferownership.call(addressUjFF6rZ, {from: accounts[3]});
		const boolnng1hz8 = await WOLFbfwW5sK.transferFrom.call(addressZTYy12A, addressjDubmcF, uintgeSbIGp, {from: accounts[5]});
		const boolUj0AKSD = await WOLFbfwW5sK.approveAndCall.call(addressLxH8lDL, uintrwewvVa, {from: accounts[4]});
		const boolZw2w0WM = await WOLFbfwW5sK.transfer.call(addressZcfhLF1, uintHcqUXZb, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WOLFbfwW5sK.transferownership.call(addressUjFF6rZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringbNLegu = "h2jDUyAfraRPR"
		const stringxXSrhZW = "7xLSVwcDf37LV86tchCYQVYwRWe7HWc0nb9LuGmXQGYd5WGRwL43q5IG49uhVDnOFObPI4E"
		const uint7fAH4t = BigInt("1075")
		const WOLFY3W0On = await WOLF.new(stringbNLegu, stringxXSrhZW, uint7fAH4t, {from: accounts[4]});
		const uintxIbLjnd = BigInt("717")
		const addressq1u3uWh = accounts[5]
		const boolUcwgpnV = await WOLFY3W0On.transfer.call(addressq1u3uWh, uintxIbLjnd, {from: accounts[4]});

		assert.equal(boolUcwgpnV, true)
	});

	it('test for WOLF', async () => {
		const stringtxkxehN = "nDFbFyn7TMgeilhEh5KNUInAUdQAm788iXo"
		const stringBwRPnCr = "ODByJ"
		const uintWzYlMNw = BigInt("50")
		const WOLFbfwW5sK = await WOLF.new(stringtxkxehN, stringBwRPnCr, uintWzYlMNw, {from: accounts[1]});
		const addressZGhSR2i = accounts[2]
		const uintlOkIbOX = BigInt("855")
		const addressTAH2few = accounts[2]
		const boolyDbXAD4 = await WOLFbfwW5sK.transferownership.call(addressZGhSR2i, {from: accounts[1]});
		const boolUj0AKSD = await WOLFbfwW5sK.approveAndCall.call(addressTAH2few, uintlOkIbOX, {from: accounts[4]});

		assert.equal(boolyDbXAD4, true)
		await expect(WOLFbfwW5sK.approveAndCall.call(addressTAH2few, uintlOkIbOX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringtxkxehN = "nDFbFyn7TMgeilhEh5KNUInAUdQAm788iXo"
		const stringBwRPnCr = "ODByJ"
		const uintd3KwuV3 = BigInt("50")
		const WOLFbfwW5sK = await WOLF.new(stringtxkxehN, stringBwRPnCr, uintd3KwuV3, {from: accounts[1]});
		const uintWpyExwY = BigInt("1202")
		const addresslOILeqv = accounts[1]
		const uintRjjOzjY = BigInt("1951")
		const addressQZnHrOm = accounts[0]
		const addressIZ8kSat = accounts[3]
		const uintkOodHKF = BigInt("851")
		const addressrBQaXqe = accounts[2]
		const boolHRJ15ga = await WOLFbfwW5sK.approveAndCall.call(addresslOILeqv, uintWpyExwY, {from: accounts[1]});
		const boolkFSpgkj = await WOLFbfwW5sK.transferFrom.call(addressIZ8kSat, addressQZnHrOm, uintRjjOzjY, {from: accounts[1]});
		const boolUj0AKSD = await WOLFbfwW5sK.approveAndCall.call(addressrBQaXqe, uintkOodHKF, {from: accounts[4]});

		assert.equal(boolHRJ15ga, true)
		await expect(WOLFbfwW5sK.transferFrom.call(addressIZ8kSat, addressQZnHrOm, uintRjjOzjY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringuTt4cQs = "tkG4RrvvKo"
		const stringumyw6nE = "yeWfa1T6CHomcWOWeHRJOMECEYfnwLBSQ9aaUj"
		const uintkOKpFD1 = BigInt("1007")
		const WOLFgQYLHOc = await WOLF.new(stringuTt4cQs, stringumyw6nE, uintkOKpFD1, {from: "0x0000000000000000000000000000000000000001"});
		const uintecIiywJ = BigInt("1643")
		const addressI9CK1Hg = accounts[1]
		const uintw1Jrngf = BigInt("780")
		const addressfOUjawQ = accounts[3]
		const addressDVsrth = accounts[4]
		const uintYG6u2Qx = BigInt("885")
		const addressZ4pDdTm = accounts[4]
		const addresstvCmhU8 = accounts[4]
		const uintpfPssN = BigInt("1146")
		const addressB3EtaN2 = "0x0000000000000000000000000000000000000001"
		const boolz39Mu7Z = await WOLFgQYLHOc.approve.call(addressI9CK1Hg, uintecIiywJ, {from: accounts[5]});
		const boolZ3mIF6H = await WOLFgQYLHOc.approveAndCall.call(addressfOUjawQ, uintw1Jrngf, {from: accounts[1]});
		const boolZUXEQIZ = await WOLFgQYLHOc.transferownership.call(addressDVsrth, {from: "0x0000000000000000000000000000000000000001"});
		const boolf7ltEW3 = await WOLFgQYLHOc.transferFrom.call(addresstvCmhU8, addressZ4pDdTm, uintYG6u2Qx, {from: accounts[1]});
		const boolQOuNsWi = await WOLFgQYLHOc.approve.call(addressB3EtaN2, uintpfPssN, {from: accounts[4]});
	});

	it('test for WOLF', async () => {
		const stringbNLegu = "h2jDUyAfraRPR"
		const stringxXSrhZW = "7xLSVwcDf37LV86tchCYQVYwRWe7HWc0nb9LuGmXQGYd5WGRwL43q5IG49uhVDnOFObPI4E"
		const uintdhPVAxz = BigInt("1075")
		const WOLFY3W0On = await WOLF.new(stringbNLegu, stringxXSrhZW, uintdhPVAxz, {from: accounts[4]});
		const uintUOeazmO = BigInt("0")
		const addressCR5BrVy = accounts[4]
		const boolq7aIBr9 = await WOLFY3W0On.approveAndCall.call(addressCR5BrVy, uintUOeazmO, {from: accounts[4]});

		assert.equal(boolq7aIBr9, true)
	});

	it('test for WOLF', async () => {
		const stringgFtGVm = "saBKajq1HLMKvCK7W8rmBASmiw8BHIEhWwl0chia4ntsV7rW"
		const stringlEwNO82 = "q84Kmb30EiOOze86fxeNgxI63XyGAr3BYLcTWh8XIF8Q8G6aCqpmxKocboeP3YMrIg6s9kqqy1dtSNlIf3iOMWAx"
		const uintBcROQYC = BigInt("1677")
		const WOLFIluiPE = await WOLF.new(stringgFtGVm, stringlEwNO82, uintBcROQYC, {from: accounts[4]});
		const uintQboP110 = BigInt("0")
		const addressbzMTVyP = accounts[4]
		const addressb9odZhH = accounts[3]
		const boolKtsguSO = await WOLFIluiPE.transferFrom.call(addressb9odZhH, addressbzMTVyP, uintQboP110, {from: accounts[0]});

		assert.equal(boolKtsguSO, true)
	});
})