const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintR3hplO = BigInt("1578")
		const stringsgS5sMg = "NrqwrEIEtfpXWWlqHy4eDjOgAbW"
		const stringnDl0zS2 = "8zqWQD4wlztvx3ltYOmJbo7vcCdLDHcwwEeX13uOl6"
		const uintcgyJk3 = BigInt("77")
		const ANRXTokenkU03kA = await ANRXToken.new(uintR3hplO, stringsgS5sMg, stringnDl0zS2, uintcgyJk3, {from: accounts[0]});
		const uintrx2uya = BigInt("332")
		const uintD7J3AR9 = BigInt("872")
		const uintp0nGwe = BigInt("1293")
		const uintqdU8I0b = await ANRXTokenkU03kA.redeem.call(uintrx2uya, {from: accounts[5]});
		const uintvCuQSuv = await ANRXTokenkU03kA.issue.call(uintD7J3AR9, {from: accounts[3]});
		const uintoyjfUFf = await ANRXTokenkU03kA.issue.call(uintp0nGwe, {from: accounts[5]});

		await expect(ANRXTokenkU03kA.redeem.call(uintrx2uya, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintbogRmAs = BigInt("995")
		const stringdyrE5I4 = "XQsRwaAzbg15CylwlWcP8akLAoa3DQTC9IIwzWnzzje3yxOHcPa3rxmdpknWdQUGGuXZmG"
		const stringxbaZdOV = "TlO8AUh6I84ws4rWKa36jiYC796QDgyFz0FLE4cB3YMfx2QY24m8Ah51z987K7YvEONswfiBni4C5U89FgNahJwydrmBGfR"
		const uintHzRfbt9 = BigInt("695")
		const ANRXTokenojApvo5 = await ANRXToken.new(uintbogRmAs, stringdyrE5I4, stringxbaZdOV, uintHzRfbt9, {from: accounts[4]});
		const uintccEXcWQ = BigInt("633")
		const uintACALMH6 = BigInt("106")
		const uintmIXNnFH = BigInt("263")
		const addressYrUVCaw = accounts[0]
		const addressORNRmwc = accounts[3]
		const addressCLfX8H8 = accounts[5]
		const uintG5LWxqg = await ANRXTokenojApvo5.totalSupply.call({from: accounts[1]});
		const uintq0DoGzF = await ANRXTokenojApvo5.issue.call(uintccEXcWQ, {from: accounts[0]});
		const uintDyRaQnO = await ANRXTokenojApvo5.issue.call(uintACALMH6, {from: "0x0000000000000000000000000000000000000001"});
		const boolXDvIOdq = await ANRXTokenojApvo5.transferFrom.call(addressORNRmwc, addressYrUVCaw, uintmIXNnFH, {from: accounts[1]});
		const uintHb5JIH = await ANRXTokenojApvo5.totalSupply.call({from: accounts[0]});
		const addressuRcwsK9 = await ANRXTokenojApvo5.deprecate.call(addressCLfX8H8, {from: accounts[2]});

		assert.equal(uintG5LWxqg, BigInt("995"))
		await expect(ANRXTokenojApvo5.issue.call(uintccEXcWQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintGBM6WRa = BigInt("947")
		const stringzVjoGxj = "63R1HJtqfvLUat2t7yL2mhEdk1VV68nQa945lDYaRRzpZAPARof"
		const stringwPxZv5c = "DUBAjFApfnWBWIe7hrxeH8fkRaNhf8spWnLH8Mp8Cjv9CEqc0jTrq3dQw7PWOUz6Dhht0b274A2dGZdekSAjG"
		const uintSNAwfz = BigInt("943")
		const ANRXTokenfTfLQwR = await ANRXToken.new(uintGBM6WRa, stringzVjoGxj, stringwPxZv5c, uintSNAwfz, {from: accounts[2]});
		const uintOjFy6g4 = BigInt("1887")
		const addressQ6KSS0G = accounts[0]
		const addressYbqXKfM = accounts[3]
		const addressO3orzV7 = accounts[0]
		const addressHt8o4l = accounts[2]
		const uintGzk2YTq = BigInt("285")
		const addressQ78PWyS = "0x0000000000000000000000000000000000000001"
		const boolo1rBare = await ANRXTokenfTfLQwR.transferFrom.call(addressYbqXKfM, addressQ6KSS0G, uintOjFy6g4, {from: "0x0000000000000000000000000000000000000001"});
		const uintPTgIT6 = await ANRXTokenfTfLQwR.allowance.call(addressHt8o4l, addressO3orzV7, {from: accounts[0]});
		const uint56kOIx = await ANRXTokenfTfLQwR.totalSupply.call({from: accounts[0]});
		const uintGz726XS = await ANRXTokenfTfLQwR.redeem.call(uintGzk2YTq, {from: accounts[1]});
		const uintQpYP7ZN = await ANRXTokenfTfLQwR.balanceOf.call(addressQ78PWyS, {from: accounts[3]});

		await expect(ANRXTokenfTfLQwR.transferFrom.call(addressYbqXKfM, addressQ6KSS0G, uintOjFy6g4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintRh36GPT = BigInt("169")
		const stringMr1uJN0 = "sF982Erpp"
		const stringlKHBAMH = "WCpFRH9eUnV3Dxza7dejheXxdCtHuOD2Kj8eYYDdUIUqY3xwoISft3chbJYTLKyNH4UrcnB5P1TscOGNiJLjQH5kswQob8W"
		const uintWecGwaC = BigInt("1826")
		const ANRXTokenSiXRe1W = await ANRXToken.new(uintRh36GPT, stringMr1uJN0, stringlKHBAMH, uintWecGwaC, {from: accounts[3]});
		const uintQb0liY3 = BigInt("224")
		const uinttO6W5od = BigInt("207")
		const uintTvCMf3 = BigInt("1181")
		const uintnb1OYNN = BigInt("762")
		const uintBhhFQwV = BigInt("542")
		const addressOKmrjgz = "0x0000000000000000000000000000000000000001"
		const uintmh8Dvip = await ANRXTokenSiXRe1W.issue.call(uintQb0liY3, {from: accounts[3]});
		const uintHrlRz7E = await ANRXTokenSiXRe1W.issue.call(uinttO6W5od, {from: accounts[3]});
		const uintpea19AE = await ANRXTokenSiXRe1W.setParams.call(uintnb1OYNN, uintTvCMf3, {from: accounts[3]});
		const boolpa2WhOc = await ANRXTokenSiXRe1W.transfer.call(addressOKmrjgz, uintBhhFQwV, {from: accounts[1]});

		await expect(ANRXTokenSiXRe1W.setParams.call(uintnb1OYNN, uintTvCMf3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintq6MwEQM = BigInt("1860")
		const stringjSdVxBI = "LKVSlW3q7MhGF7AY5UoeDGACqhGhEGASKOsarw816jCfTfLbcfJTKxDvDMsCbHRYihCnKiWpt4NTBWfIICBcRxJKRwOYMnAI3Y"
		const stringwqM26Xz = "g6vmDvf8Bp0UgNYXdqAh2CVIweNp8rDk2BG"
		const uintjXM48qE = BigInt("1406")
		const ANRXTokenXXepeXB = await ANRXToken.new(uintq6MwEQM, stringjSdVxBI, stringwqM26Xz, uintjXM48qE, {from: accounts[4]});
		const uinteiIozmr = BigInt("837")
		const addressTGmZz7y = accounts[2]
		const uintHVkm4gT = BigInt("1553")
		const uint859f6J = BigInt("1656")
		const addressFZLCPyx = accounts[3]
		const boolkQofEdK = await ANRXTokenXXepeXB.approve.call(addressTGmZz7y, uinteiIozmr, {from: accounts[3]});
		const uintcbtncNP = await ANRXTokenXXepeXB.redeem.call(uintHVkm4gT, {from: accounts[5]});
		const boolUmvxFC = await ANRXTokenXXepeXB.approve.call(addressFZLCPyx, uint859f6J, {from: accounts[3]});
		const uintonwMS94 = await ANRXTokenXXepeXB.totalSupply.call({from: accounts[3]});

		assert.equal(boolkQofEdK, true)
		await expect(ANRXTokenXXepeXB.redeem.call(uintHVkm4gT, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintRlwDVvi = BigInt("2001")
		const stringcHVoI47 = "jIdJBSNLkmvlMkfCJvPToD3R8FYBHzm9ZaAS5BKfiuorr"
		const stringmPnabbS = "xHHqX11NpVRiYFB6vWInMwureiX"
		const uintpDPnlZL = BigInt("1793")
		const ANRXTokenSJyN09E = await ANRXToken.new(uintRlwDVvi, stringcHVoI47, stringmPnabbS, uintpDPnlZL, {from: accounts[4]});
		const uintr0tqEGG = BigInt("1297")
		const addressCThYvkB = accounts[4]
		const uintAUEQxQc = BigInt("1338")
		const uintJ9wsWLG = BigInt("1465")
		const addressCTEEzQ = "0x0000000000000000000000000000000000000001"
		const uintbalmur = BigInt("410")
		const addressPuvxdTW = accounts[0]
		const addressMQ0OJQ8 = accounts[2]
		const boolRjMZ8j = await ANRXTokenSJyN09E.transfer.call(addressCThYvkB, uintr0tqEGG, {from: accounts[5]});
		const uintOrvaaUl = await ANRXTokenSJyN09E.setParams.call(uintJ9wsWLG, uintAUEQxQc, {from: accounts[5]});
		const addressY6bu6AU = await ANRXTokenSJyN09E.deprecate.call(addressCTEEzQ, {from: accounts[0]});
		const boolr9tNfof = await ANRXTokenSJyN09E.approve.call(addressPuvxdTW, uintbalmur, {from: "0x0000000000000000000000000000000000000001"});
		const uintY3RYTFs = await ANRXTokenSJyN09E.balanceOf.call(addressMQ0OJQ8, {from: accounts[5]});

		await expect(ANRXTokenSJyN09E.transfer.call(addressCThYvkB, uintr0tqEGG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintQy2nITT = BigInt("1808")
		const stringqGBmbLj = "c9Ylkx"
		const stringlj88CC = "hxQmQurynpWsSIYXIJ4v4cwM3Dvv84KBORGhABUQkd9B3pRSHg28U"
		const uintytuClhB = BigInt("1812")
		const ANRXTokenNiJurwl = await ANRXToken.new(uintQy2nITT, stringqGBmbLj, stringlj88CC, uintytuClhB, {from: accounts[4]});
		const addresslbmoo9k = accounts[0]
		const uintG1omKt8 = BigInt("1700")
		const addressyau723 = accounts[3]
		const uintSA3cuSf = BigInt("346")
		const addressUJYXjng = accounts[2]
		const addressYRg4VZx = accounts[3]
		const addressTvSKWDc = accounts[4]
		const addresszkJmm3l = accounts[3]
		const uintORZJ8LV = await ANRXTokenNiJurwl.balanceOf.call(addresslbmoo9k, {from: accounts[2]});
		const uintEk4M4j = await ANRXTokenNiJurwl.totalSupply.call({from: accounts[4]});
		const boolNx6BO4B = await ANRXTokenNiJurwl.approve.call(addressyau723, uintG1omKt8, {from: "0x0000000000000000000000000000000000000001"});
		const booljaGGLzx = await ANRXTokenNiJurwl.transferFrom.call(addressYRg4VZx, addressUJYXjng, uintSA3cuSf, {from: accounts[5]});
		const uintcSHmltl = await ANRXTokenNiJurwl.allowance.call(addresszkJmm3l, addressTvSKWDc, {from: accounts[3]});

		assert.equal(boolNx6BO4B, true)
		assert.equal(uintEk4M4j, BigInt("1808"))
		assert.equal(uintORZJ8LV, BigInt("0"))
		await expect(ANRXTokenNiJurwl.transferFrom.call(addressYRg4VZx, addressUJYXjng, uintSA3cuSf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintxo0AnQL = BigInt("1860")
		const stringjSdVxBI = "LKVSlW3q7MhGF7AY5UoeDGACqhGhEGASKOsarw816jCfTfLbcfJTKxDvDMsCbHRYihCnKiWpt4NTBWfIICBcRxJKRwOYMnAI3Y"
		const stringwqM26Xz = "g6vmDvf8Bp0UgNYXdqAh2CVIweNp8rDk2BG"
		const uintjauiiEx = BigInt("1406")
		const ANRXTokenXXepeXB = await ANRXToken.new(uintxo0AnQL, stringjSdVxBI, stringwqM26Xz, uintjauiiEx, {from: accounts[4]});
		const addressCNKkUAQ = accounts[0]
		const addressv0cbF3p = accounts[3]
		const uintmc94Fv7 = BigInt("837")
		const addressv7w1kHY = accounts[2]
		const uintMlBoJV9 = BigInt("1553")
		const uintEGPS8J1 = BigInt("1766")
		const uintXWYM82h = BigInt("555")
		const uintfso9Wh4 = BigInt("1656")
		const addressgVAF6Ui = accounts[3]
		const uintm2GXWrc = await ANRXTokenXXepeXB.allowance.call(addressv0cbF3p, addressCNKkUAQ, {from: accounts[1]});
		const boolkQofEdK = await ANRXTokenXXepeXB.approve.call(addressv7w1kHY, uintmc94Fv7, {from: accounts[3]});
		const uintcbtncNP = await ANRXTokenXXepeXB.redeem.call(uintMlBoJV9, {from: accounts[5]});
		const uintneNmy6S = await ANRXTokenXXepeXB.redeem.call(uintEGPS8J1, {from: accounts[0]});
		const uintQtL0oZr = await ANRXTokenXXepeXB.issue.call(uintXWYM82h, {from: accounts[4]});
		const boolUmvxFC = await ANRXTokenXXepeXB.approve.call(addressgVAF6Ui, uintfso9Wh4, {from: accounts[3]});
		const uintonwMS94 = await ANRXTokenXXepeXB.totalSupply.call({from: accounts[3]});

		assert.equal(boolkQofEdK, true)
		assert.equal(uintm2GXWrc, BigInt("0"))
		await expect(ANRXTokenXXepeXB.redeem.call(uintMlBoJV9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintAWAFjc3 = BigInt("633")
		const stringFEVm5Zc = "4Psmoo8d6UGEpAJPmgPBKyjtSv58u1dJ9HeIxOgsPKqa6kC6kOx2HpWhCtDBIONWXIK7XQ5tId0DFps"
		const stringYKrhJdp = "Zcd5apK6nfOKlCDoKkacf5BXDizJaDkynjzEGhdfiqVMhpVF8ZI5rkanera"
		const uintIUWiwp0 = BigInt("1994")
		const ANRXTokenmfGF2u0 = await ANRXToken.new(uintAWAFjc3, stringFEVm5Zc, stringYKrhJdp, uintIUWiwp0, {from: "0x0000000000000000000000000000000000000001"});
		const uintb7bNnGK = BigInt("1536")
		const address9Kfarc = accounts[3]
		const uintPyQnxs = BigInt("1747")
		const uintCbBXdfQ = BigInt("1373")
		const addresssx0LcUg = accounts[4]
		const uintwwOKQGu = BigInt("114")
		const boolq7kRiMw = await ANRXTokenmfGF2u0.approve.call(address9Kfarc, uintb7bNnGK, {from: accounts[2]});
		const uintHfar45O = await ANRXTokenmfGF2u0.redeem.call(uintPyQnxs, {from: accounts[4]});
		const booln6p6JFJ = await ANRXTokenmfGF2u0.transfer.call(addresssx0LcUg, uintCbBXdfQ, {from: accounts[1]});
		const uintqeCII0z = await ANRXTokenmfGF2u0.issue.call(uintwwOKQGu, {from: accounts[4]});
	});

	it('test for ANRXToken', async () => {
		const uintlmN9L7 = BigInt("2001")
		const stringcHVoI47 = "jIdJBSNLkmvlMkfCJvPToD3R8FYBHzm9ZaAS5BKfiuorr"
		const stringmPnabbS = "xHHqX11NpVRiYFB6vWInMwureiX"
		const uintFF5ot55 = BigInt("1793")
		const ANRXTokenSJyN09E = await ANRXToken.new(uintlmN9L7, stringcHVoI47, stringmPnabbS, uintFF5ot55, {from: accounts[4]});
		const addresszCmWdC = accounts[2]
		const uintqnUHeQD = BigInt("1297")
		const addressYetSlHs = accounts[4]
		const addressTTk0nzP = accounts[4]
		const addressnWPggE = "0x0000000000000000000000000000000000000001"
		const uintc0zh6M = BigInt("410")
		const addressb7lrksS = accounts[0]
		const addressLXBo2yt = accounts[3]
		const addressA6zBF6m = await ANRXTokenSJyN09E.deprecate.call(addresszCmWdC, {from: accounts[4]});
		const boolRjMZ8j = await ANRXTokenSJyN09E.transfer.call(addressYetSlHs, uintqnUHeQD, {from: accounts[5]});
		const addressCWJCBW0 = await ANRXTokenSJyN09E.deprecate.call(addressTTk0nzP, {from: accounts[2]});
		const addressY6bu6AU = await ANRXTokenSJyN09E.deprecate.call(addressnWPggE, {from: accounts[0]});
		const boolr9tNfof = await ANRXTokenSJyN09E.approve.call(addressb7lrksS, uintc0zh6M, {from: "0x0000000000000000000000000000000000000001"});
		const uintY3RYTFs = await ANRXTokenSJyN09E.balanceOf.call(addressLXBo2yt, {from: accounts[5]});

		await expect(ANRXTokenSJyN09E.transfer.call(addressYetSlHs, uintqnUHeQD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintkHzlsOC = BigInt("1087")
		const stringTFxedO9 = "kMyTcs5rHePYkFOKbmatPTgc2pXgR1HgE1En7yDEnI5anPcx7kFQlQOe7MhFBcGWHBJQZlvBoXNlPJD8ANOokeaQUaCmOrf"
		const stringXrCfeXD = "5T8xGAY4bAHeKMpps4Uhfc5s03Uoiu8f7dsMvnLWTKm5JPEERcW464RCTXEy9xnODhWvPnL"
		const uintijTgHF3 = BigInt("707")
		const ANRXTokenF6hGPtD = await ANRXToken.new(uintkHzlsOC, stringTFxedO9, stringXrCfeXD, uintijTgHF3, {from: accounts[4]});
		const uintJBcA0RC = BigInt("852")
		const uintVERLwHB = BigInt("1672")
		const addressj8ACsMo = accounts[0]
		const addresswzYZIrL = accounts[5]
		const uintteCc9XB = await ANRXTokenF6hGPtD.redeem.call(uintJBcA0RC, {from: accounts[4]});
		const boolIdCv9Sn = await ANRXTokenF6hGPtD.transferFrom.call(addresswzYZIrL, addressj8ACsMo, uintVERLwHB, {from: accounts[3]});

		await expect(ANRXTokenF6hGPtD.transferFrom.call(addresswzYZIrL, addressj8ACsMo, uintVERLwHB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintG6S0ex = BigInt("1087")
		const stringTFxedO9 = "kMyTcs5rHePYkFOKbmatPTgc2pXgR1HgE1En7yDEnI5anPcx7kFQlQOe7MhFBcGWHBJQZlvBoXNlPJD8ANOokeaQUaCmOrf"
		const stringXrCfeXD = "5T8xGAY4bAHeKMpps4Uhfc5s03Uoiu8f7dsMvnLWTKm5JPEERcW464RCTXEy9xnODhWvPnL"
		const uintsW7z4f9 = BigInt("707")
		const ANRXTokenF6hGPtD = await ANRXToken.new(uintG6S0ex, stringTFxedO9, stringXrCfeXD, uintsW7z4f9, {from: accounts[4]});
		const addressmlJjBtz = "0x00000000000000000000000000000000000000-1"
		const addressdqzrVYb = accounts[0]
		const uintKSUu5iB = BigInt("1672")
		const addressorVHLcQ = accounts[0]
		const addressGXm5dW5 = accounts[5]
		const uintM8VDmV = BigInt("938")
		const addressbaNJ11t = accounts[3]
		const addressGNd7EwN = accounts[3]
		const uintUCHtSP1 = await ANRXTokenF6hGPtD.allowance.call(addressdqzrVYb, addressmlJjBtz, {from: "0x0000000000000000000000000000000000000001"});
		const boolIdCv9Sn = await ANRXTokenF6hGPtD.transferFrom.call(addressGXm5dW5, addressorVHLcQ, uintKSUu5iB, {from: accounts[3]});
		const boolpzpHlgO = await ANRXTokenF6hGPtD.transferFrom.call(addressGNd7EwN, addressbaNJ11t, uintM8VDmV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ANRXTokenF6hGPtD.allowance.call(addressdqzrVYb, addressmlJjBtz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})