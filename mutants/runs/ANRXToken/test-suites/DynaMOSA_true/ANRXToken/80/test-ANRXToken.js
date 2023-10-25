const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintbs9ZMxZ = BigInt("960")
		const stringEta04s1 = "OIJedZikBypBO9xWjWl4uYlQObsfSu1GHt7OlCFLUz8CdqLHBXIVAjQfprPUCSD6BAYr7QLSFLas5E66LUysKkQTKS"
		const stringz990d5O = "8SRR4ge8BXGe6kc5CJAQBCJxNAeTS9CWHwOEBwl5of9b2GkyICKd7XSuGNYcxZmLx1b6IJ6KHIpoU97g6d8or9MsJZ"
		const uintrQMnDZs = BigInt("2039")
		const ANRXTokenKlaQNpT = await ANRXToken.new(uintbs9ZMxZ, stringEta04s1, stringz990d5O, uintrQMnDZs, {from: accounts[3]});
		const addressgBr352U = "0x0000000000000000000000000000000000000001"
		const uintpKY0qz1 = BigInt("85")
		const addressn48aaR = await ANRXTokenKlaQNpT.deprecate.call(addressgBr352U, {from: accounts[4]});
		const uintgcHnDcf = await ANRXTokenKlaQNpT.redeem.call(uintpKY0qz1, {from: accounts[4]});

		await expect(ANRXTokenKlaQNpT.deprecate.call(addressgBr352U, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintrNmIPoo = BigInt("1325")
		const stringZyKVbZN = "J6wg8qGwE2grqylzLHf6zTnJHWtDAOeKN3BUTfFol8gjwCccd6ix8yRWleuT4todiGHXvIlP3Pp2Ptmj"
		const stringZ4GBkAg = "sblIItZyPVFMiQFlmr1rNYEFSmeQO5FdCTgYukCnZGfBSbF2P93viPL2NNB6kSXdR7fUJMNYtdVcahDbR6jpXSUe9ZDX8"
		const uintdKoEFne = BigInt("1946")
		const ANRXTokenYUlrxwn = await ANRXToken.new(uintrNmIPoo, stringZyKVbZN, stringZ4GBkAg, uintdKoEFne, {from: accounts[2]});
		const uintgi4faui = BigInt("967")
		const uintM2UAiw = BigInt("1121")
		const uintvAhmMNd = BigInt("1719")
		const addresszv7KNk0 = accounts[0]
		const uintgiUYXHK = await ANRXTokenYUlrxwn.setParams.call(uintM2UAiw, uintgi4faui, {from: accounts[2]});
		const boolaVdU7X = await ANRXTokenYUlrxwn.approve.call(addresszv7KNk0, uintvAhmMNd, {from: accounts[5]});

		await expect(ANRXTokenYUlrxwn.setParams.call(uintM2UAiw, uintgi4faui, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintcQxPjPU = BigInt("549")
		const stringepUfSB9 = "uWWPPSWMd8DQZwCRIo92D5iVZU7jyqJrUZDH8DhJPOdqZ2ixBdU36hdbsJwvr6g5YAVkQjTZNsfMXKqhdkrv9wHXfNsyK71DqJ"
		const stringqE5yS9S = "4p"
		const uintyFJlLi6 = BigInt("746")
		const ANRXTokenlNNx88P = await ANRXToken.new(uintcQxPjPU, stringepUfSB9, stringqE5yS9S, uintyFJlLi6, {from: accounts[1]});
		const addresso1i2xuc = accounts[5]
		const uintkNWLetj = BigInt("694")
		const addresssVrYhMy = accounts[4]
		const addressuhVPR4k = accounts[3]
		const addressvcm0Tgm = accounts[3]
		const addressoZ0Uxpc = accounts[4]
		const addressekwuh6M = accounts[0]
		const uintHvRfmBv = await ANRXTokenlNNx88P.balanceOf.call(addresso1i2xuc, {from: accounts[4]});
		const boolkKe8TLD = await ANRXTokenlNNx88P.transferFrom.call(addressuhVPR4k, addresssVrYhMy, uintkNWLetj, {from: accounts[3]});
		const uintZlxGJqa = await ANRXTokenlNNx88P.allowance.call(addressoZ0Uxpc, addressvcm0Tgm, {from: accounts[0]});
		const uintmGSNeCR = await ANRXTokenlNNx88P.totalSupply.call({from: accounts[0]});
		const uintByUfya4 = await ANRXTokenlNNx88P.balanceOf.call(addressekwuh6M, {from: accounts[0]});

		assert.equal(uintHvRfmBv, BigInt("0"))
		await expect(ANRXTokenlNNx88P.transferFrom.call(addressuhVPR4k, addresssVrYhMy, uintkNWLetj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintkrBqgvL = BigInt("309")
		const stringB7FfInK = "F3bK3WyEpbJYBhrD"
		const stringmNXtdQ7 = ""
		const uinttwBbGt = BigInt("842")
		const ANRXTokenR70poFY = await ANRXToken.new(uintkrBqgvL, stringB7FfInK, stringmNXtdQ7, uinttwBbGt, {from: accounts[0]});
		const uintYoGub68 = BigInt("588")
		const uintLOZZace = BigInt("1678")
		const addressc6U5FN = accounts[3]
		const addressATbS1MA = accounts[3]
		const uintDf3JiI9 = BigInt("1340")
		const addressqs6mcUK = accounts[0]
		const addressGEPiD0w = accounts[2]
		const addressbthpvPe = accounts[1]
		const uintCri4G63 = BigInt("212")
		const uintNRHRQ5O = BigInt("181")
		const uintqN1rpn = await ANRXTokenR70poFY.issue.call(uintYoGub68, {from: accounts[0]});
		const boolUPWVcG = await ANRXTokenR70poFY.transferFrom.call(addressATbS1MA, addressc6U5FN, uintLOZZace, {from: "0x0000000000000000000000000000000000000001"});
		const boolBQ6xe7O = await ANRXTokenR70poFY.transferFrom.call(addressGEPiD0w, addressqs6mcUK, uintDf3JiI9, {from: accounts[4]});
		const addressBNyHpn = await ANRXTokenR70poFY.deprecate.call(addressbthpvPe, {from: accounts[3]});
		const uinttMt1NY1 = await ANRXTokenR70poFY.setParams.call(uintNRHRQ5O, uintCri4G63, {from: accounts[0]});

		await expect(ANRXTokenR70poFY.transferFrom.call(addressATbS1MA, addressc6U5FN, uintLOZZace, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintWxiQFyp = BigInt("622")
		const stringetxoDoc = "yR9UqhKrmVSmpjD1h9CPplu"
		const stringj5IOF33 = "KQsXPnbXYYwJGRM7RVeWXl9vpGFJqGNaGqQMX5hJ4cKjvp1dRDEobUFxeTmXz9KC"
		const uintlxCUwD = BigInt("22")
		const ANRXTokenRDYVl6s = await ANRXToken.new(uintWxiQFyp, stringetxoDoc, stringj5IOF33, uintlxCUwD, {from: accounts[0]});
		const addressC6o3JWQ = accounts[5]
		const uintibXzBGh = BigInt("707")
		const addressc1lHGSo = accounts[3]
		const uint1a0eKZ = await ANRXTokenRDYVl6s.balanceOf.call(addressC6o3JWQ, {from: accounts[3]});
		const boolF2ZKdLe = await ANRXTokenRDYVl6s.approve.call(addressc1lHGSo, uintibXzBGh, {from: accounts[4]});

		assert.equal(boolF2ZKdLe, true)
		assert.equal(uint1a0eKZ, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintizEKm4H = BigInt("203")
		const stringGKdxT8 = "jrHei9rUkE"
		const stringggMk5fm = "EM3fy46rFsOpT38LqGKimvmB8JOxV3Nx28KTncFM6mTWdQWNxeKDzK"
		const uintkhGED3 = BigInt("449")
		const ANRXTokenYmiFUex = await ANRXToken.new(uintizEKm4H, stringGKdxT8, stringggMk5fm, uintkhGED3, {from: "0x0000000000000000000000000000000000000001"});
		const uintnTGz41k = BigInt("957")
		const addressHj3EmTx = accounts[5]
		const addressns9opjK = accounts[1]
		const uintqnnIvlZ = BigInt("840")
		const addressJY1me9 = accounts[3]
		const uintUR9VHD7 = BigInt("1895")
		const boolXFFLfwE = await ANRXTokenYmiFUex.transferFrom.call(addressns9opjK, addressHj3EmTx, uintnTGz41k, {from: accounts[2]});
		const boolOPg585p = await ANRXTokenYmiFUex.approve.call(addressJY1me9, uintqnnIvlZ, {from: accounts[2]});
		const uintRfzxDW = await ANRXTokenYmiFUex.redeem.call(uintUR9VHD7, {from: accounts[4]});
	});

	it('test for ANRXToken', async () => {
		const uintYSUbrLr = BigInt("641")
		const stringvNbnIUL = "wufPGYVfAsCAwEfvVhrQdKxzHtpEVEG0BOBGPWUk"
		const stringza3hzAf = "Q5s97uqtsr39J4rRa"
		const uintFBmVW5a = BigInt("808")
		const ANRXTokenhWg6yCn = await ANRXToken.new(uintYSUbrLr, stringvNbnIUL, stringza3hzAf, uintFBmVW5a, {from: accounts[0]});
		const addressPlWIDWR = accounts[4]
		const addressiwFHgk = accounts[2]
		const addressUUVAFAF = accounts[2]
		const uintIq2eYeV = BigInt("774")
		const addressGSCgxG5 = accounts[4]
		const addressNSgDCMc = accounts[3]
		const addressR3PEC48 = accounts[3]
		const addressZFm3zOz = accounts[3]
		const uintlmavFyf = await ANRXTokenhWg6yCn.balanceOf.call(addressPlWIDWR, {from: accounts[4]});
		const uintrEOLuTK = await ANRXTokenhWg6yCn.allowance.call(addressUUVAFAF, addressiwFHgk, {from: accounts[2]});
		const uintf6QoiCC = await ANRXTokenhWg6yCn.issue.call(uintIq2eYeV, {from: accounts[4]});
		const addressAJnSryi = await ANRXTokenhWg6yCn.deprecate.call(addressGSCgxG5, {from: accounts[5]});
		const uintDxawcJ5 = await ANRXTokenhWg6yCn.balanceOf.call(addressNSgDCMc, {from: accounts[3]});
		const addressjrxPnBY = await ANRXTokenhWg6yCn.deprecate.call(addressR3PEC48, {from: accounts[3]});
		const addressgzgyoer = await ANRXTokenhWg6yCn.deprecate.call(addressZFm3zOz, {from: accounts[0]});
		const uintxZ96upv = await ANRXTokenhWg6yCn.totalSupply.call({from: accounts[2]});

		assert.equal(uintlmavFyf, BigInt("0"))
		assert.equal(uintrEOLuTK, BigInt("0"))
		await expect(ANRXTokenhWg6yCn.issue.call(uintIq2eYeV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintEo6peaM = BigInt("1821")
		const stringehjEsJU = "NRoqvF9Ls"
		const stringl9XnR0t = "n2mE2aFIcLB2VNAtKxCvo4jDP2xkgQ7ajItqwe82thas2rrRuzb20mcRuVlwnFQImcsINJx"
		const uintwlYHcaX = BigInt("1445")
		const ANRXTokenF8nxrFf = await ANRXToken.new(uintEo6peaM, stringehjEsJU, stringl9XnR0t, uintwlYHcaX, {from: accounts[4]});
		const addresskBJS3Kt = accounts[2]
		const addressfWO5896 = accounts[4]
		const uintECRdKj0 = BigInt("537")
		const addresslqTlUcq = accounts[2]
		const uintCY2LT6G = BigInt("44")
		const addressYAEqul7 = accounts[4]
		const addressHXAt90e = accounts[1]
		const addressezCh5mX = accounts[1]
		const uintnQE3atk = await ANRXTokenF8nxrFf.allowance.call(addressfWO5896, addresskBJS3Kt, {from: accounts[1]});
		const boolAcaEvFr = await ANRXTokenF8nxrFf.approve.call(addresslqTlUcq, uintECRdKj0, {from: "0x0000000000000000000000000000000000000001"});
		const uintpXmdGL9 = await ANRXTokenF8nxrFf.totalSupply.call({from: accounts[4]});
		const uint7Q9j6O = await ANRXTokenF8nxrFf.totalSupply.call({from: accounts[5]});
		const boolj5dgcsL = await ANRXTokenF8nxrFf.transferFrom.call(addressHXAt90e, addressYAEqul7, uintCY2LT6G, {from: accounts[3]});
		const addressUqBtfPM = await ANRXTokenF8nxrFf.deprecate.call(addressezCh5mX, {from: accounts[3]});

		assert.equal(boolAcaEvFr, true)
		assert.equal(uint7Q9j6O, BigInt("1821"))
		assert.equal(uintnQE3atk, BigInt("0"))
		assert.equal(uintpXmdGL9, BigInt("1821"))
		await expect(ANRXTokenF8nxrFf.transferFrom.call(addressHXAt90e, addressYAEqul7, uintCY2LT6G, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintCOsRLKo = BigInt("622")
		const stringetxoDoc = "yR9UqhKrmVSmpjD1h9CPplu"
		const stringj5IOF33 = "KQsXPnbXYYwJGRM7RVeWXl9vpGFJqGNaGqQMX5hJ4cKjvp1dRDEobUFxeTmXz9KC"
		const uintd3N7649 = BigInt("22")
		const ANRXTokenRDYVl6s = await ANRXToken.new(uintCOsRLKo, stringetxoDoc, stringj5IOF33, uintd3N7649, {from: accounts[0]});
		const uintMufVmD5 = BigInt("1394")
		const addressZMX1Ts6 = accounts[4]
		const uintXM98X4L = BigInt("701")
		const addressWOoZw8K = accounts[3]
		const uintCAFVNwV = BigInt("59")
		const addresshJjpb38 = accounts[0]
		const boolvLedkqC = await ANRXTokenRDYVl6s.approve.call(addressZMX1Ts6, uintMufVmD5, {from: accounts[4]});
		const boolF2ZKdLe = await ANRXTokenRDYVl6s.approve.call(addressWOoZw8K, uintXM98X4L, {from: accounts[4]});
		const uintGOGkmV = await ANRXTokenRDYVl6s.redeem.call(uintCAFVNwV, {from: accounts[0]});
		const addressaWnShQ1 = await ANRXTokenRDYVl6s.deprecate.call(addresshJjpb38, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolF2ZKdLe, true)
		assert.equal(boolvLedkqC, true)
		await expect(ANRXTokenRDYVl6s.deprecate.call(addresshJjpb38, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintoYE7QXm = BigInt("622")
		const stringetxoDoc = "yR9UqhKrmVSmpjD1h9CPplu"
		const stringj5IOF33 = "KQsXPnbXYYwJGRM7RVeWXl9vpGFJqGNaGqQMX5hJ4cKjvp1dRDEobUFxeTmXz9KC"
		const uintHPCJjUq = BigInt("22")
		const ANRXTokenRDYVl6s = await ANRXToken.new(uintoYE7QXm, stringetxoDoc, stringj5IOF33, uintHPCJjUq, {from: accounts[0]});
		const uintWpcZ1tl = BigInt("1398")
		const addressQpAqHqs = accounts[4]
		const uintfesUsaj = BigInt("730")
		const addressJcoSMEy = accounts[3]
		const boold8NXyZX = await ANRXTokenRDYVl6s.transfer.call(addressQpAqHqs, uintWpcZ1tl, {from: accounts[1]});
		const boolF2ZKdLe = await ANRXTokenRDYVl6s.approve.call(addressJcoSMEy, uintfesUsaj, {from: accounts[4]});
		const uintA6sBZ97 = await ANRXTokenRDYVl6s.totalSupply.call({from: accounts[4]});

		await expect(ANRXTokenRDYVl6s.transfer.call(addressQpAqHqs, uintWpcZ1tl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintkV2rzBa = BigInt("1325")
		const stringZyKVbZN = "J6wg8qGwE2grqylzLHf6zTnJHWtDAOeKN3BUTfFol8gjwCccd6ix8yRWleuT4todiGHXvIlP3Pp2Ptmj"
		const stringZ4GBkAg = "sblIItZyPVFMiQFlmr1rNYEFSmeQO5FdCTgYukCnZGfBSbF2P93viPL2NNB6kSXdR7fUJMNYtdVcahDbR6jpXSUe9ZDX8"
		const uintjmlqAjT = BigInt("1946")
		const ANRXTokenYUlrxwn = await ANRXToken.new(uintkV2rzBa, stringZyKVbZN, stringZ4GBkAg, uintjmlqAjT, {from: accounts[2]});
		const addressaoRQzkI = accounts[0]
		const uintpOJYTdf = BigInt("1297")
		const addressmkeuvuX = accounts[6]
		const addressoXT5R9 = accounts[2]
		const addressSXe5pYY = await ANRXTokenYUlrxwn.deprecate.call(addressaoRQzkI, {from: accounts[2]});
		const boolWFy9iwP = await ANRXTokenYUlrxwn.transferFrom.call(addressoXT5R9, addressmkeuvuX, uintpOJYTdf, {from: accounts[3]});

		await expect(ANRXTokenYUlrxwn.transferFrom.call(addressoXT5R9, addressmkeuvuX, uintpOJYTdf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintIiYSvoc = BigInt("1142")
		const stringUqnbH3p = "hg1fvaOdMDlprOLth"
		const stringxRfqPMs = "BnjJQWNMk6DeGSXhAp38yUa5St2yfUmLNXBhTUHT8LsdNYDTio7SATGuUEekW3twNWEagLgl"
		const uintAxqCCjI = BigInt("1834")
		const ANRXTokenOTAQyFk = await ANRXToken.new(uintIiYSvoc, stringUqnbH3p, stringxRfqPMs, uintAxqCCjI, {from: accounts[2]});
		const uintmpWTy7S = BigInt("1160")
		const uintsrs4SAK = BigInt("843")
		const uintQPaaq4j = BigInt("6")
		const uintUHmoZOv = BigInt("290")
		const uintGSKRMkH = await ANRXTokenOTAQyFk.issue.call(uintmpWTy7S, {from: accounts[2]});
		const uintetYqtF = await ANRXTokenOTAQyFk.setParams.call(uintQPaaq4j, uintsrs4SAK, {from: accounts[2]});
		const uintEAmwWLu = await ANRXTokenOTAQyFk.issue.call(uintUHmoZOv, {from: accounts[3]});

		await expect(ANRXTokenOTAQyFk.setParams.call(uintQPaaq4j, uintsrs4SAK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})