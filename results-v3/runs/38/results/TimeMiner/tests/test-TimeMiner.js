const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinerHfS2GOV = await TimeMiner.new({from: accounts[2]});
		const uintmcGEnEg = BigInt("199")
		const addressYbjEKXf = accounts[1]
		const uintlc31S2M = BigInt("1191")
		const uintMe8toQd = BigInt("317")
		const uintB1RJNaM = BigInt("1176")
		const addressRq6wknz = accounts[3]
		const addressaU2OhFf = accounts[4]
		const addressKf05bd9 = accounts[3]
		await TimeMinerHfS2GOV.preSaleFinished.call({from: accounts[2]});
		const boolf9A6y0r = await TimeMinerHfS2GOV.transfer.call(addressYbjEKXf, uintmcGEnEg, {from: accounts[5]});
		const uint256X776L3z = await TimeMinerHfS2GOV.setPrizeFromNewAddress.call(uintMe8toQd, uintlc31S2M, {from: accounts[5]});
		const boolo2WmfT9 = await TimeMinerHfS2GOV.approve.call(addressRq6wknz, uintB1RJNaM, {from: accounts[1]});
		const uint256y9HxVOL = await TimeMinerHfS2GOV.allowance.call(addressKf05bd9, addressaU2OhFf, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TimeMinerHfS2GOV.preSaleFinished.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerKsXRG8S = await TimeMiner.new({from: accounts[4]});
		const uintIGmnCdk = BigInt("527")
		const boolF28VdfC = await TimeMinerKsXRG8S.infoStableSystem.call({from: accounts[5]});
		const booliCCxF8V = await TimeMinerKsXRG8S.infoStableSystem.call({from: accounts[5]});
		const boolE5P0TM = await TimeMinerKsXRG8S.infoStableSystem.call({from: accounts[2]});
		const uinthpsQ8B = await TimeMinerKsXRG8S.preSale.call(uintIGmnCdk, {from: accounts[5]});

		await expect(TimeMinerKsXRG8S.preSale.call(uintIGmnCdk, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineraGNitXR = await TimeMiner.new({from: accounts[4]});
		const addressOjh4pQA = accounts[0]
		const addressyubCQ2 = accounts[0]
		const boolsHn2934 = false
		const addressPJV6JHY = accounts[5]
		const uinthcCcIhI = BigInt("1755")
		const addressxE5YUzJ = accounts[4]
		const addressiAnCvo5 = accounts[0]
		const bool2wBLHQ = false
		const addressBuCGKZg = accounts[1]
		const uint256SBNp0j = await TimeMineraGNitXR.balanceOfTokenCirculation.call(addressOjh4pQA, {from: accounts[3]});
		const uint256HpQFVkQ = await TimeMineraGNitXR.allInfoFor.call(addressyubCQ2, {from: "0x0000000000000000000000000000000000000001"});
		const addressfhZziv = await TimeMineraGNitXR.whitelist.call(addressPJV6JHY, boolsHn2934, {from: accounts[3]});
		const boolalczC4 = await TimeMineraGNitXR.transfer.call(addressxE5YUzJ, uinthcCcIhI, {from: accounts[4]});
		const uint256KoiFdzK = await TimeMineraGNitXR.balanceOfTokenCirculation.call(addressiAnCvo5, {from: "0x0000000000000000000000000000000000000001"});
		const addressY9qTtf6 = await TimeMineraGNitXR.whitelist.call(addressBuCGKZg, bool2wBLHQ, {from: accounts[2]});

		assert.equal(uint256SBNp0j, BigInt("0"))
		await expect(TimeMineraGNitXR.allInfoFor.call(addressyubCQ2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerh4PCYf2 = await TimeMiner.new({from: accounts[2]});
		const uintf4Zl6mI = BigInt("525")
		const uintZnlEnn = BigInt("1951")
		const uintuiwmRz = BigInt("770")
		const addressi4Vph1s = accounts[2]
		const addressx72XWf = accounts[4]
		const addressAdNUXeJ = accounts[0]
		const addressCJIegRk = accounts[1]
		const addressARruSJl = accounts[2]
		const uint256lTA64wa = await TimeMinerh4PCYf2.setPrizeFromNewAddress.call(uintZnlEnn, uintf4Zl6mI, {from: accounts[4]});
		const uint256hWR0UFe = await TimeMinerh4PCYf2.totalSupply.call({from: accounts[4]});
		const boolsBxAKuM = await TimeMinerh4PCYf2.transferFrom.call(addressx72XWf, addressi4Vph1s, uintuiwmRz, {from: "0x0000000000000000000000000000000000000001"});
		const uint256yYkWqk = await TimeMinerh4PCYf2.allowance.call(addressCJIegRk, addressAdNUXeJ, {from: accounts[2]});
		const uint256fcgyP0n = await TimeMinerh4PCYf2.balanceOf.call(addressARruSJl, {from: accounts[5]});

		await expect(TimeMinerh4PCYf2.setPrizeFromNewAddress.call(uintZnlEnn, uintf4Zl6mI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerMgu5du = await TimeMiner.new({from: accounts[2]});
		const addressrLFVSVN = accounts[1]
		const addressprbd0em = accounts[1]
		const uint256d3orkP = await TimeMinerMgu5du.totalSupply.call({from: accounts[4]});
		const boolPulqoPB = await TimeMinerMgu5du.isWhitelisted.call(addressrLFVSVN, {from: accounts[4]});
		const uint256d8y3z1B = await TimeMinerMgu5du.balanceOfTokenCirculation.call(addressprbd0em, {from: accounts[2]});
		const boolaJ3nD5 = await TimeMinerMgu5du.infoStableSystem.call({from: accounts[4]});
		await TimeMinerMgu5du.preSaleFinished.call({from: accounts[1]});

		assert.equal(boolPulqoPB, false)
		assert.equal(uint256d3orkP, BigInt("24000000"))
		assert.equal(uint256d8y3z1B, BigInt("0"))
		await expect(TimeMinerMgu5du.preSaleFinished.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerEdwgtEx = await TimeMiner.new({from: accounts[0]});
		const uintBTfaAE = BigInt("1036")
		const addressHCnLm9O = accounts[1]
		const boolqzn4juO = await TimeMinerEdwgtEx.infoStableSystem.call({from: accounts[5]});
		const uint256ULnmMn4 = await TimeMinerEdwgtEx.changePreSalePriceIfToHigh.call(uintBTfaAE, {from: accounts[2]});
		const uint256Uyp6LVJ = await TimeMinerEdwgtEx.balanceOf.call(addressHCnLm9O, {from: accounts[4]});

		await expect(TimeMinerEdwgtEx.changePreSalePriceIfToHigh.call(uintBTfaAE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerEdwgtEx = await TimeMiner.new({from: accounts[0]});
		const uintiFAmepr = BigInt("1605")
		const addressbEt3vXw = accounts[0]
		const addresst9C5szJ = accounts[2]
		const addressiy7B0Ma = accounts[1]
		const boolqzn4juO = await TimeMinerEdwgtEx.infoStableSystem.call({from: accounts[5]});
		const boolvcbVQyz = await TimeMinerEdwgtEx.transferFrom.call(addresst9C5szJ, addressbEt3vXw, uintiFAmepr, {from: accounts[1]});
		await TimeMinerEdwgtEx.preSaleFinished.call({from: accounts[1]});
		const uint256Uyp6LVJ = await TimeMinerEdwgtEx.balanceOf.call(addressiy7B0Ma, {from: accounts[4]});

		await expect(TimeMinerEdwgtEx.transferFrom.call(addresst9C5szJ, addressbEt3vXw, uintiFAmepr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinergVQmn6m = await TimeMiner.new({from: accounts[4]});
		const uintdguDrA = BigInt("882")
		const uintqdQNaUx = BigInt("1355")
		const boolUA6HuJW = true
		const addressHFRPA98 = accounts[3]
		const addressnrcfokV = accounts[4]
		const uint256LnqsYrE = await TimeMinergVQmn6m.setPrizeFromNewAddress.call(uintqdQNaUx, uintdguDrA, {from: accounts[4]});
		const addressAbLtXYt = await TimeMinergVQmn6m.whitelist.call(addressHFRPA98, boolUA6HuJW, {from: accounts[2]});
		const boolWx9sCan = await TimeMinergVQmn6m.infoStableSystem.call({from: accounts[4]});
		const uint256Q3hUbvE = await TimeMinergVQmn6m.tokensToClaim.call(addressnrcfokV, {from: accounts[4]});

		await expect(TimeMinergVQmn6m.whitelist.call(addressHFRPA98, boolUA6HuJW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerHfS2GOV = await TimeMiner.new({from: accounts[2]});
		const addressDVR8aUn = accounts[4]
		const addressUYBCYNQ = accounts[4]
		const addresspAsuELq = "0x0000000000000000000000000000000000000001"
		const addressTd5ih9 = accounts[5]
		const bool6wx5Xy = await TimeMinerHfS2GOV.infoStableSystem.call({from: accounts[4]});
		await TimeMinerHfS2GOV.preSaleFinished.call({from: accounts[2]});
		const uint256y9HxVOL = await TimeMinerHfS2GOV.allowance.call(addressUYBCYNQ, addressDVR8aUn, {from: "0x0000000000000000000000000000000000000001"});
		const uint256IQQtNcQ = await TimeMinerHfS2GOV.allowance.call(addressTd5ih9, addresspAsuELq, {from: accounts[4]});

		await expect(TimeMinerHfS2GOV.preSaleFinished.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerHfS2GOV = await TimeMiner.new({from: accounts[2]});
		const uintSk97AI = BigInt("197")
		const addressC2fbIlP = accounts[2]
		const uintDUu4Vfw = BigInt("1191")
		const uintQqiL2VH = BigInt("317")
		const addressbPpvp3g = accounts[4]
		const addressdG9VU2s = accounts[3]
		await TimeMinerHfS2GOV.preSaleFinished.call({from: accounts[2]});
		const boolBWIDkjY = await TimeMinerHfS2GOV.approve.call(addressC2fbIlP, uintSk97AI, {from: accounts[2]});
		const uint256X776L3z = await TimeMinerHfS2GOV.setPrizeFromNewAddress.call(uintQqiL2VH, uintDUu4Vfw, {from: accounts[5]});
		const uint256y9HxVOL = await TimeMinerHfS2GOV.allowance.call(addressdG9VU2s, addressbPpvp3g, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TimeMinerHfS2GOV.preSaleFinished.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerefIFuzy = await TimeMiner.new({from: accounts[4]});
		const boolTjGjFO5 = true
		const addresskPsBWvq = accounts[4]
		const addressseit078 = accounts[4]
		const uintVBEVg5X = BigInt("826")
		const uintAINQ7h = BigInt("1052")
		const uint256dBs8xkz = await TimeMinerefIFuzy.totalSupply.call({from: accounts[2]});
		const boolHpDhjvG = await TimeMinerefIFuzy.setStableCoinSystem.call(boolTjGjFO5, {from: accounts[0]});
		const uint256CrBmGv = await TimeMinerefIFuzy.balanceOf.call(addresskPsBWvq, {from: accounts[4]});
		const boolxNK3VBW = await TimeMinerefIFuzy.isWhitelisted.call(addressseit078, {from: accounts[4]});
		const uint256Ceouv4X = await TimeMinerefIFuzy.setPrizeFromNewAddress.call(uintAINQ7h, uintVBEVg5X, {from: accounts[2]});

		assert.equal(uint256dBs8xkz, BigInt("24000000"))
		await expect(TimeMinerefIFuzy.setStableCoinSystem.call(boolTjGjFO5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerEdwgtEx = await TimeMiner.new({from: accounts[0]});
		const uintQynGxjK = BigInt("1148")
		const addressdqI7KR5 = accounts[4]
		await TimeMinerEdwgtEx.preSaleFinished.call({from: accounts[0]});
		const boold8cuwmD = await TimeMinerEdwgtEx.transfer.call(addressdqI7KR5, uintQynGxjK, {from: accounts[0]});

		await expect(TimeMinerEdwgtEx.preSaleFinished.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerftqkOIw = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const addressChyGVIj = accounts[2]
		const uintdfOhOGU = BigInt("939")
		const addressa2F6fuP = accounts[3]
		const addressOpHZmP = accounts[4]
		const uint256ohhLblJ = await TimeMinerftqkOIw.totalSupply.call({from: accounts[2]});
		const uint256I8rEC2L = await TimeMinerftqkOIw.tokensToClaim.call(addressChyGVIj, {from: accounts[3]});
		const boolRuPjgQf = await TimeMinerftqkOIw.approve.call(addressa2F6fuP, uintdfOhOGU, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Bx4Kb2l = await TimeMinerftqkOIw.tokensToClaim.call(addressOpHZmP, {from: accounts[1]});
	});
})