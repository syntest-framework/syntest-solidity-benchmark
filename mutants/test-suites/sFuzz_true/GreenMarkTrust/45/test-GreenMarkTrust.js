const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintiqkTCx7 = BigInt("1222")
		const string8Kkl3q = "EiX44iSmSWIu6yWK36KFHfDbO"
		const stringOHk66r1 = "1q7qzkgsUjcO"
		const GreenMarkTrustA9TjjWx = await GreenMarkTrust.new(uintiqkTCx7, string8Kkl3q, stringOHk66r1, {from: accounts[1]});
		const uintIoKogmE = BigInt("1748")
		const addressXGchVxF = accounts[3]
		const uintIPnabG0 = BigInt("1691")
		const addressOhtGuby = accounts[4]
		const uintA6H3RrV = BigInt("1704")
		const addressKXO7Lie = accounts[1]
		const uintFMfzbAr = BigInt("1523")
		const addressUdl7ejE = accounts[3]
		const uintibyZLm = BigInt("48")
		const addressBqpUvkv = accounts[0]
//		const booltBhtHzF = await GreenMarkTrustA9TjjWx.transfer.call(addressXGchVxF, uintIoKogmE, {from: accounts[3]});
//		const boolpNHoJR5 = await GreenMarkTrustA9TjjWx.approve.call(addressOhtGuby, uintIPnabG0, {from: accounts[3]});
//		const boolWykmuNC = await GreenMarkTrustA9TjjWx.approve.call(addressKXO7Lie, uintA6H3RrV, {from: accounts[1]});
//		const booldlAkFDW = await GreenMarkTrustA9TjjWx.approve.call(addressUdl7ejE, uintFMfzbAr, {from: accounts[1]});
//		const boolmAd7H3 = await GreenMarkTrustA9TjjWx.approve.call(addressBqpUvkv, uintibyZLm, {from: accounts[2]});

		await expect(GreenMarkTrustA9TjjWx.transfer.call(addressXGchVxF, uintIoKogmE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintsmAoKzr = BigInt("1628")
		const stringNCm06GK = "6lV9Xa7mJ"
		const stringKenZGGh = "CPSVl9y3uKVLFQXrqwgbCYKnEeoucI5lwx1drxYrr8u4lHGpUEiqmvoTGy0QiMkShT12MTO8QOrMO65rm9g0kVvdOQCMGF"
		const GreenMarkTrustR9ity6n = await GreenMarkTrust.new(uintsmAoKzr, stringNCm06GK, stringKenZGGh, {from: accounts[2]});
		const uintB7drEYx = BigInt("1380")
		const addressesdoWPW = accounts[1]
		const uintsM13bgK = BigInt("1318")
		const uintEqqQFZ = BigInt("709")
		const addressy49UlaY = accounts[4]
		const addressIWHURBM = accounts[3]
		const uintQJDNE1 = BigInt("394")
		const addressQfLEDuK = accounts[0]
		const addressGxLOhiJ = accounts[3]
		const uintbvlQmfw = BigInt("495")
		const addresscKIhKog = accounts[4]
//		const boolV93a7By = await GreenMarkTrustR9ity6n.burnFrom.call(addressesdoWPW, uintB7drEYx, {from: accounts[0]});
//		const boolEMKVAc8 = await GreenMarkTrustR9ity6n.burn.call(uintsM13bgK, {from: accounts[0]});
//		const boolZTRQpo5 = await GreenMarkTrustR9ity6n.transferFrom.call(addressIWHURBM, addressy49UlaY, uintEqqQFZ, {from: accounts[1]});
//		const boolpmRCXTJ = await GreenMarkTrustR9ity6n.transferFrom.call(addressGxLOhiJ, addressQfLEDuK, uintQJDNE1, {from: accounts[2]});
//		const boolvnLPiAe = await GreenMarkTrustR9ity6n.approve.call(addresscKIhKog, uintbvlQmfw, {from: accounts[4]});

		await expect(GreenMarkTrustR9ity6n.burnFrom.call(addressesdoWPW, uintB7drEYx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintaNI0BAr = BigInt("392")
		const stringxtQPXfN = "DrEUhEhgLG7xGt"
		const stringsbfm0WY = "sxMEMmN7Ms9IuOGFOJWF7H5w9NDQA"
		const GreenMarkTrustf3caOw4 = await GreenMarkTrust.new(uintaNI0BAr, stringxtQPXfN, stringsbfm0WY, {from: accounts[4]});
		const uintBsPeRg1 = BigInt("1355")
		const addressAPHvq8V = accounts[4]
		const addressnLkPinX = accounts[1]
		const uintmUuPdd3 = BigInt("1119")
		const addressnnoQHJE = accounts[4]
		const uintqAHQpWu = BigInt("184")
		const addressEVFxLUi = accounts[1]
		const uintZtTfaSN = BigInt("1016")
		const address0SGElb = accounts[0]
		const uintV3PseWp = BigInt("1018")
//		const boolaSJFU5z = await GreenMarkTrustf3caOw4.transferFrom.call(addressnLkPinX, addressAPHvq8V, uintBsPeRg1, {from: accounts[4]});
//		const boolODQX2HD = await GreenMarkTrustf3caOw4.approve.call(addressnnoQHJE, uintmUuPdd3, {from: accounts[1]});
//		const booltpbfhfq = await GreenMarkTrustf3caOw4.transfer.call(addressEVFxLUi, uintqAHQpWu, {from: accounts[3]});
//		const boolrpICm9L = await GreenMarkTrustf3caOw4.approve.call(address0SGElb, uintZtTfaSN, {from: accounts[5]});
//		const boolXkaJX8o = await GreenMarkTrustf3caOw4.burn.call(uintV3PseWp, {from: accounts[1]});

		await expect(GreenMarkTrustf3caOw4.transferFrom.call(addressnLkPinX, addressAPHvq8V, uintBsPeRg1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintMid0DFt = BigInt("960")
		const stringw2U2gGe = "1wOUVqrXRiXzGNkrF1Mm2wJRoDUfN3a64My8PaVYx2z6kYiMREsUVTDFNZ1jaMpsufFtgfDpvF1YeLcfYiFvfq27KL"
		const stringMjWWH6W = "djFtLFs870uW6iIG5D"
		const GreenMarkTrustiwwbGgP = await GreenMarkTrust.new(uintMid0DFt, stringw2U2gGe, stringMjWWH6W, {from: accounts[1]});
		const uintWYAmviR = BigInt("1781")
		const uintI3abQpl = BigInt("1752")
		const addressBGb7A5R = accounts[3]
		const uintL5hpefd = BigInt("260")
		const addressMKb58oT = accounts[0]
		const addressgjyiQWv = accounts[0]
//		const boolDh0Evy4 = await GreenMarkTrustiwwbGgP.burn.call(uintWYAmviR, {from: accounts[2]});
//		const boolud5t1WR = await GreenMarkTrustiwwbGgP.transfer.call(addressBGb7A5R, uintI3abQpl, {from: accounts[0]});
//		const booljUssjp7 = await GreenMarkTrustiwwbGgP.transferFrom.call(addressgjyiQWv, addressMKb58oT, uintL5hpefd, {from: accounts[5]});

		await expect(GreenMarkTrustiwwbGgP.burn.call(uintWYAmviR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintkKIVMOV = BigInt("569")
		const stringEiprlKv = "HFHPVos4sJAa6aV6tS49dMRfHkvesG6"
		const stringjSoaUeS = "Qhyzurg7Q0WRzbPlkGumpACEssVcI6dXWDJTxlm7SVonFNnem3am47GDq5352sIqERMTJFnHyEDInJ43pIJDdM49"
		const GreenMarkTrustumUDaoD = await GreenMarkTrust.new(uintkKIVMOV, stringEiprlKv, stringjSoaUeS, {from: accounts[2]});
		const byteHx9DqM = "0x0c1c150a011b10031f100002080f091d141803201d0a0b1e0f1b1315000c"
		const uintCYYm6vT = BigInt("622")
		const addressnMV0NDG = accounts[0]
		const uintN16Tol9 = BigInt("1875")
		const address3mYyXv = accounts[1]
//		const boolNDH9TRS = await GreenMarkTrustumUDaoD.approveAndCall.call(addressnMV0NDG, uintCYYm6vT, byteHx9DqM, {from: accounts[0]});
//		const boolefTzqPn = await GreenMarkTrustumUDaoD.approve.call(address3mYyXv, uintN16Tol9, {from: accounts[1]});

		await expect(GreenMarkTrustumUDaoD.approveAndCall.call(addressnMV0NDG, uintCYYm6vT, byteHx9DqM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintmSc7d5G = BigInt("1919")
		const stringW3YWDMy = "paIaWfMvEO5sGDKPslgwLFyEuDBSGGjRz"
		const stringb7J0lVx = "TKVrFVO"
		const GreenMarkTrusthE5vNk0 = await GreenMarkTrust.new(uintmSc7d5G, stringW3YWDMy, stringb7J0lVx, {from: accounts[0]});
		const uint74KosR = BigInt("249")
		const uintxNEHHRA = BigInt("781")
		const addressUq8sH6 = accounts[3]
		const uintG5V4EgL = BigInt("793")
		const addresswfh2HfR = "0x0000000000000000000000000000000000000001"
		const addressZFJkq7v = accounts[3]
		const boolkEivaw = await GreenMarkTrusthE5vNk0.burn.call(uint74KosR, {from: accounts[0]});
//		const boollksKB2m = await GreenMarkTrusthE5vNk0.burnFrom.call(addressUq8sH6, uintxNEHHRA, {from: accounts[2]});
//		const boolr2YeVNc = await GreenMarkTrusthE5vNk0.transferFrom.call(addressZFJkq7v, addresswfh2HfR, uintG5V4EgL, {from: accounts[2]});

		assert.equal(boolkEivaw, true)
		await expect(GreenMarkTrusthE5vNk0.burnFrom.call(addressUq8sH6, uintxNEHHRA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintu4TA8W3 = BigInt("1370")
		const stringcRrEJYB = "rRpnPZFWmD3Ni1HgK5IUfamckW8ipS1jrOImKYQgW8AIOUT2MNJIEJRzaaU8BtlBIMzaPKNULpX1pF0cHlyRfbUWep4LfUylUT"
		const stringmNBhnM = "0Bopif7E3MYIwmgsmbwqK6ysF"
		const GreenMarkTrustSmir3L = await GreenMarkTrust.new(uintu4TA8W3, stringcRrEJYB, stringmNBhnM, {from: accounts[3]});
		const uintNfXZQc0 = BigInt("1004")
		const addressCrjyp5k = accounts[0]
		const uintBvb3kH = BigInt("1519")
		const addressKyvduaR = accounts[1]
		const addressc3T4iXK = accounts[3]
		const boolFLT92q3 = await GreenMarkTrustSmir3L.transfer.call(addressCrjyp5k, uintNfXZQc0, {from: accounts[3]});
//		const boolVwRRh8a = await GreenMarkTrustSmir3L.transferFrom.call(addressc3T4iXK, addressKyvduaR, uintBvb3kH, {from: accounts[3]});

		assert.equal(boolFLT92q3, true)
		await expect(GreenMarkTrustSmir3L.transferFrom.call(addressc3T4iXK, addressKyvduaR, uintBvb3kH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintdT2xniC = BigInt("569")
		const stringEiprlKv = "HFHPVos4sJAa6aV6tS49dMRfHkvesG6"
		const stringjSoaUeS = "Qhyzurg7Q0WRzbPlkGumpACEssVcI6dXWDJTxlm7SVonFNnem3am47GDq5352sIqERMTJFnHyEDInJ43pIJDdM49"
		const GreenMarkTrustumUDaoD = await GreenMarkTrust.new(uintdT2xniC, stringEiprlKv, stringjSoaUeS, {from: accounts[2]});
		const uintUR6kAnR = BigInt("210")
		const addressAKdhuzQ = accounts[2]
		const uintQEyjPZK = BigInt("1842")
		const addresskLElopD = accounts[1]
		const uintLvB3TAA = BigInt("549")
		const addresscS7ViI = accounts[1]
//		const boolRHiByKg = await GreenMarkTrustumUDaoD.burnFrom.call(addressAKdhuzQ, uintUR6kAnR, {from: accounts[3]});
//		const boolefTzqPn = await GreenMarkTrustumUDaoD.approve.call(addresskLElopD, uintQEyjPZK, {from: accounts[1]});
//		const boolHAGg014 = await GreenMarkTrustumUDaoD.approve.call(addresscS7ViI, uintLvB3TAA, {from: accounts[1]});

		await expect(GreenMarkTrustumUDaoD.burnFrom.call(addressAKdhuzQ, uintUR6kAnR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uint2SRkSw = BigInt("97")
		const stringKqy8EyT = "lWsREhn2MOSMBP1YyurknW3JeotCZLfSV7y7RrYClnMDOydlfedr2cK3sVA8qntmb87GnjwSNQ6tV57AZWMDl2yjbDv1t5O"
		const stringybRYLDI = "aH8dSnk4qqd25VH6ATqZJNaDDoekfHvsMws4jVlaBfW9KJICihTkuB8CcGuS1UQkmfwpNaP6W94DpOVBn2oPEJgs5DUzNA"
		const GreenMarkTrustZleHswn = await GreenMarkTrust.new(uint2SRkSw, stringKqy8EyT, stringybRYLDI, {from: "0x0000000000000000000000000000000000000001"});
		const uintRuqsVob = BigInt("1070")
		const addressRrguDCt = accounts[1]
		const uintYjwex3u = BigInt("1702")
		const address8JYAg2 = accounts[4]
		const uintK6cF09O = BigInt("1939")
		const addressgG9I0kj = accounts[4]
		const byteixUW953 = "0x150e15110d011816"
		const uintpOhjL05 = BigInt("710")
		const addressU4rwHvR = accounts[4]
		const boolkJypPNl = await GreenMarkTrustZleHswn.approve.call(addressRrguDCt, uintRuqsVob, {from: accounts[4]});
		const boolfVbbr9D = await GreenMarkTrustZleHswn.approve.call(address8JYAg2, uintYjwex3u, {from: accounts[2]});
		const boolatz4Qe1 = await GreenMarkTrustZleHswn.burnFrom.call(addressgG9I0kj, uintK6cF09O, {from: accounts[3]});
		const booluLCg6tu = await GreenMarkTrustZleHswn.approveAndCall.call(addressU4rwHvR, uintpOhjL05, byteixUW953, {from: accounts[3]});
	});
})