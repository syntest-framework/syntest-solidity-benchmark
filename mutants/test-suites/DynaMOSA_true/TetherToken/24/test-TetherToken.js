const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintZSxZALU = BigInt("1250")
		const stringwL57gnH = "5nqcUhd1ivKIfENRxJ"
		const stringlEODwDZ = "M0jzWd59o4CSTqJ8eGt3e7t4fGeC7cgRrlRydzBRJmnmEBgLqJ8AtF1IfjMdRF3T"
		const uintdt8GzX = BigInt("450")
		const TetherTokenGhpOA7 = await TetherToken.new(uintZSxZALU, stringwL57gnH, stringlEODwDZ, uintdt8GzX, {from: accounts[5]});
		const addressf95568j = accounts[0]
		const uintaNlkK0X = BigInt("939")
		const addressy27C1Ot = accounts[0]
		const uintylhtewt = BigInt("1084")
		const addressUuoO5nR = accounts[0]
		const addressgPYnxtN = accounts[4]
		const uintkWdCFQk = BigInt("1870")
		const uintfBc57gc = BigInt("561")
		const uintcC5zlWo = await TetherTokenGhpOA7.balanceOf.call(addressf95568j, {from: accounts[4]});
//		const addressBxxRKDq = await TetherTokenGhpOA7.transfer.call(addressy27C1Ot, uintaNlkK0X, {from: accounts[4]});
//		const addressDgJMViN = await TetherTokenGhpOA7.approve.call(addressUuoO5nR, uintylhtewt, {from: accounts[4]});
//		const uintKprxxJ = await TetherTokenGhpOA7.balanceOf.call(addressgPYnxtN, {from: accounts[2]});
//		const uintUx1nd0g = await TetherTokenGhpOA7.redeem.call(uintkWdCFQk, {from: accounts[3]});
//		const uints6rGvh = await TetherTokenGhpOA7.issue.call(uintfBc57gc, {from: accounts[3]});

		assert.equal(uintcC5zlWo, BigInt("0"))
		await expect(TetherTokenGhpOA7.transfer.call(addressy27C1Ot, uintaNlkK0X, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintuK9sfn = BigInt("761")
		const stringMHtCF4w = "otTEFr7gaKEv"
		const stringhLkP41k = "9qzPCyZLBOdhpGnz9mKAGA"
		const uintq4n6oTm = BigInt("1995")
		const TetherTokentLq2L1C = await TetherToken.new(uintuK9sfn, stringMHtCF4w, stringhLkP41k, uintq4n6oTm, {from: accounts[1]});
		const uintDOUXF8I = BigInt("103")
		const addressBaxr5hz = accounts[5]
		const addressDGruJZY = accounts[3]
		const uintCd73dGw = BigInt("1921")
		const addressjgA1MX = accounts[4]
		const addressPeqqnk0 = accounts[2]
		const uintGmFeSzb = BigInt("1698")
		const addressixFuBVY = accounts[3]
		const uintPID6xiA = BigInt("262")
		const addressXZLALYy = accounts[0]
//		const addressfT73Emp = await TetherTokentLq2L1C.transferFrom.call(addressDGruJZY, addressBaxr5hz, uintDOUXF8I, {from: accounts[4]});
//		const addressMF9hezU = await TetherTokentLq2L1C.transferFrom.call(addressPeqqnk0, addressjgA1MX, uintCd73dGw, {from: accounts[0]});
//		const addressbPW3lI = await TetherTokentLq2L1C.approve.call(addressixFuBVY, uintGmFeSzb, {from: accounts[2]});
//		const addressvDqOOJy = await TetherTokentLq2L1C.approve.call(addressXZLALYy, uintPID6xiA, {from: accounts[2]});

		await expect(TetherTokentLq2L1C.transferFrom.call(addressDGruJZY, addressBaxr5hz, uintDOUXF8I, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintMXSoh3v = BigInt("365")
		const stringfnLjBI = "ghloaBflM5VwhSJCXsQIzzjRRNrMExdCx57zIqG7V0AO5IB7bd"
		const string7bzQXC = "1mhktwlrG"
		const uintA06tXmo = BigInt("1729")
		const TetherTokenHCOhynG = await TetherToken.new(uintMXSoh3v, stringfnLjBI, string7bzQXC, uintA06tXmo, {from: accounts[5]});
		const addressh5vLsM = accounts[3]
		const addressaspbN3L = accounts[2]
		const addresscVHjZpl = accounts[1]
		const uintjNrIJ1X = BigInt("1115")
		const addressxj1rI51 = accounts[1]
		const uintGhzvuh = await TetherTokenHCOhynG.allowance.call(addressaspbN3L, addressh5vLsM, {from: accounts[0]});
		const uintdeJSb4K = await TetherTokenHCOhynG.balanceOf.call(addresscVHjZpl, {from: accounts[4]});
		const addressgwgH9xz = await TetherTokenHCOhynG.approve.call(addressxj1rI51, uintjNrIJ1X, {from: accounts[4]});

		assert.equal(uintGhzvuh, BigInt("0"))
		assert.equal(uintdeJSb4K, BigInt("0"))
	});

	it('test for TetherToken', async () => {
		const uintfo53Di = BigInt("1385")
		const strings4A48yW = "dwjO1AoXJnH1bo6lnO7218UxIXBnM5UzYzc7DJcHgRcvsCKNJyxIyEb3fU8maV2XlN0zm14XvjegEicRDUCdBkc"
		const stringT8qQzSO = "5V9KTRceYQfniim2AxhQTCkRiHKK02Oz921FMPMNNI9kho3bhTHZJjknNuCGfHlqfQjtnAvtv280oTQqtnSPN5HsDZik"
		const uintzNgkKSl = BigInt("356")
		const TetherTokenuyiAZpn = await TetherToken.new(uintfo53Di, strings4A48yW, stringT8qQzSO, uintzNgkKSl, {from: accounts[1]});
		const uintyDwRFSO = BigInt("760")
		const addressgLX1Ot = accounts[1]
		const uintxkCv2PX = BigInt("1887")
		const addressVhKk2nt = await TetherTokenuyiAZpn.approve.call(addressgLX1Ot, uintyDwRFSO, {from: accounts[3]});
		const uintmaxfzrJ = await TetherTokenuyiAZpn.totalSupply.call({from: accounts[2]});
//		const uintKeKMZ2A = await TetherTokenuyiAZpn.redeem.call(uintxkCv2PX, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintmaxfzrJ, BigInt("1385"))
		await expect(TetherTokenuyiAZpn.redeem.call(uintxkCv2PX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintOtOD0pj = BigInt("590")
		const stringivW7iL3 = "PH5J8yvEWx9y1rglckkel2VtZQFzOanZncSfCtzIA8FR9LoW48Gb0G6EXiM"
		const stringwf62IAO = ""
		const uintffK5TJ8 = BigInt("221")
		const TetherTokenoDkGGsp = await TetherToken.new(uintOtOD0pj, stringivW7iL3, stringwf62IAO, uintffK5TJ8, {from: accounts[3]});
		const uinterSKvb6 = BigInt("1584")
		const uintk5xMHtR = BigInt("1077")
		const addresscrWrDh6 = accounts[5]
		const addressri8HSu = accounts[2]
		const uintkN45u53 = BigInt("469")
		const addressun4ALA = accounts[0]
		const uintD3Ycrxv = BigInt("1815")
		const uint1TFC0S = await TetherTokenoDkGGsp.totalSupply.call({from: accounts[1]});
//		const uintvf7ojkz = await TetherTokenoDkGGsp.issue.call(uinterSKvb6, {from: accounts[1]});
//		const addressiLFLlU = await TetherTokenoDkGGsp.approve.call(addresscrWrDh6, uintk5xMHtR, {from: "0x0000000000000000000000000000000000000001"});
//		const addressY7ytJJu = await TetherTokenoDkGGsp.deprecate.call(addressri8HSu, {from: accounts[1]});
//		const addresszIQ2BM4 = await TetherTokenoDkGGsp.approve.call(addressun4ALA, uintkN45u53, {from: "0x0000000000000000000000000000000000000001"});
//		const uintsZDvKZB = await TetherTokenoDkGGsp.issue.call(uintD3Ycrxv, {from: accounts[1]});

		assert.equal(uint1TFC0S, BigInt("590"))
		await expect(TetherTokenoDkGGsp.issue.call(uinterSKvb6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uinto23vKUk = BigInt("1407")
		const stringZlUN7v0 = "aNzM0AkKPFQSDvETJi2Jp98A9aAZHf0UwTjamruOP9WxkAb2swwLAt"
		const stringxKIa3Ko = "3QO1krXaYWrN8tMfwLwGbxGGvEBuJw4rDXe68qRDY8"
		const uintVI2yIMF = BigInt("1861")
		const TetherToken2v9BmT = await TetherToken.new(uinto23vKUk, stringZlUN7v0, stringxKIa3Ko, uintVI2yIMF, {from: accounts[0]});
		const addressXxeekNL = "0x0000000000000000000000000000000000000001"
		const uintvwhTtFd = BigInt("981")
		const addressPnQuXCX = accounts[5]
		const uintuOlq3wr = BigInt("1892")
		const uintkhzqBoc = BigInt("746")
		const addressMgRGjQK = accounts[4]
		const uintJPb5AQR = BigInt("1045")
		const addressczFxL9y = "0x0000000000000000000000000000000000000001"
		const addressnIliaku = accounts[3]
//		const addressY5YnNl = await TetherToken2v9BmT.deprecate.call(addressXxeekNL, {from: accounts[4]});
//		const addressjtHhb5Q = await TetherToken2v9BmT.approve.call(addressPnQuXCX, uintvwhTtFd, {from: accounts[3]});
//		const uintURCKzY4 = await TetherToken2v9BmT.issue.call(uintuOlq3wr, {from: accounts[1]});
//		const address41BQNw = await TetherToken2v9BmT.approve.call(addressMgRGjQK, uintkhzqBoc, {from: accounts[2]});
//		const addressoRZs7C = await TetherToken2v9BmT.transferFrom.call(addressnIliaku, addressczFxL9y, uintJPb5AQR, {from: accounts[3]});

		await expect(TetherToken2v9BmT.deprecate.call(addressXxeekNL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintzXOpGTG = BigInt("365")
		const stringfnLjBI = "ghloaBflM5VwhSJCXsQIzzjRRNrMExdCx57zIqG7V0AO5IB7bd"
		const string7bzQXC = "1mhktwlrG"
		const uintf0jJ7gJ = BigInt("1729")
		const TetherTokenHCOhynG = await TetherToken.new(uintzXOpGTG, stringfnLjBI, string7bzQXC, uintf0jJ7gJ, {from: accounts[5]});
		const addressxinbHjV = accounts[4]
		const addressDUEpNgU = accounts[2]
		const addressRXRfEha = accounts[1]
		const uintE2eVD4s = BigInt("975")
		const uintC6SsYoG = BigInt("1115")
		const addressGDU3hpk = accounts[1]
		const uintGhzvuh = await TetherTokenHCOhynG.allowance.call(addressDUEpNgU, addressxinbHjV, {from: accounts[0]});
		const uintdeJSb4K = await TetherTokenHCOhynG.balanceOf.call(addressRXRfEha, {from: accounts[4]});
		const uintoYQ7q5K = await TetherTokenHCOhynG.issue.call(uintE2eVD4s, {from: accounts[5]});
		const addressgwgH9xz = await TetherTokenHCOhynG.approve.call(addressGDU3hpk, uintC6SsYoG, {from: accounts[4]});

		assert.equal(uintGhzvuh, BigInt("0"))
		assert.equal(uintdeJSb4K, BigInt("0"))
	});

	it('test for TetherToken', async () => {
		const uintnGXd4NO = BigInt("365")
		const stringfnLjBI = "ghloaBflM5VwhSJCXsQIzzjRRNrMExdCx57zIqG7V0AO5IB7bd"
		const string7bzQXC = "1mhktwlrG"
		const uintsCjmeT1 = BigInt("1729")
		const TetherTokenHCOhynG = await TetherToken.new(uintnGXd4NO, stringfnLjBI, string7bzQXC, uintsCjmeT1, {from: accounts[5]});
		const uintP8SpJWG = BigInt("331")
		const uintNSuj8je = BigInt("1860")
		const addressRtGrT0u = accounts[3]
		const addressMyP1vm9 = accounts[2]
		const addresscFp1spz = accounts[2]
		const uintM7eqQ8s = BigInt("1115")
		const addressJjuNJBl = accounts[1]
//		const uintEUwMiG1 = await TetherTokenHCOhynG.setParams.call(uintNSuj8je, uintP8SpJWG, {from: accounts[0]});
//		const uintGhzvuh = await TetherTokenHCOhynG.allowance.call(addressMyP1vm9, addressRtGrT0u, {from: accounts[0]});
//		const uintdeJSb4K = await TetherTokenHCOhynG.balanceOf.call(addresscFp1spz, {from: accounts[4]});
//		const addressgwgH9xz = await TetherTokenHCOhynG.approve.call(addressJjuNJBl, uintM7eqQ8s, {from: accounts[4]});

		await expect(TetherTokenHCOhynG.setParams.call(uintNSuj8je, uintP8SpJWG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintW9dh5ce = BigInt("1327")
		const stringyOB4wS = "Prke8KmMHnFsJUeId2dKfjTeAe8WfAssBAadp6xW6EXMqVw2Q6lrTu1dOc38sR1JjYVdpVpbpHp"
		const stringDKKyJFP = "wsi1RtLC2ILYcASWs6jOionvPtbBMTMnzQfMXAjUAPtknnYAmjJUu"
		const uints1CEP3U = BigInt("1326")
		const TetherTokenjORE8n6 = await TetherToken.new(uintW9dh5ce, stringyOB4wS, stringDKKyJFP, uints1CEP3U, {from: accounts[4]});
		const uintu6LhfDh = BigInt("1829")
		const uintxj9R62 = BigInt("368")
		const uintLYyzrx9 = BigInt("1778")
		const uintqA7Ksrb = BigInt("1289")
		const uintaJgpzxY = BigInt("1317")
		const addressciBPRsm = accounts[4]
		const addressqxRmGzG = accounts[0]
		const uinta1IV0Aa = BigInt("808")
		const addressmqarRMS = accounts[2]
		const uintq9K583w = BigInt("1979")
		const uintjqFb51e = BigInt("1679")
		const uintgaNUyfH = BigInt("1337")
//		const uintYUqoE5D = await TetherTokenjORE8n6.setParams.call(uintxj9R62, uintu6LhfDh, {from: accounts[4]});
//		const uintZTgLlVd = await TetherTokenjORE8n6.setParams.call(uintqA7Ksrb, uintLYyzrx9, {from: accounts[0]});
//		const addressNfCxso = await TetherTokenjORE8n6.transferFrom.call(addressqxRmGzG, addressciBPRsm, uintaJgpzxY, {from: accounts[0]});
//		const addressF3AFmAw = await TetherTokenjORE8n6.transfer.call(addressmqarRMS, uinta1IV0Aa, {from: accounts[4]});
//		const uintlj1f07h = await TetherTokenjORE8n6.redeem.call(uintq9K583w, {from: accounts[3]});
//		const uintsejZ1d3 = await TetherTokenjORE8n6.setParams.call(uintgaNUyfH, uintjqFb51e, {from: accounts[4]});

		await expect(TetherTokenjORE8n6.setParams.call(uintxj9R62, uintu6LhfDh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintFPg6XIN = BigInt("802")
		const stringD7Yxpwe = "3MSqOrMyDGjAdIDTsTKmYYRwjkr0wfMu6YdH9ZNCfknmUtOVVrWyYRZo8tlh"
		const stringDCgnRJ7 = "rLWcusW86YJgHy3R6k3Co1G"
		const uintlKO0f35 = BigInt("1032")
		const TetherTokenNdGhUGH = await TetherToken.new(uintFPg6XIN, stringD7Yxpwe, stringDCgnRJ7, uintlKO0f35, {from: "0x0000000000000000000000000000000000000001"});
		const uintjKeDKFJ = BigInt("1928")
		const addressaIyU0Jk = accounts[1]
		const uintIiwJiX5 = BigInt("1724")
		const uintnn7vYJ = BigInt("1457")
		const addresssOybwow = accounts[1]
		const addressq9IoSRZ = "0x0000000000000000000000000000000000000001"
		const addressR7QHGxU = accounts[0]
		const uintmwWeBq9 = BigInt("1802")
		const addresspUOGdph = accounts[4]
		const addressJjHjRJQ = accounts[4]
		const addressnX5jSMI = await TetherTokenNdGhUGH.transfer.call(addressaIyU0Jk, uintjKeDKFJ, {from: accounts[4]});
		const uintFD36PWn = await TetherTokenNdGhUGH.redeem.call(uintIiwJiX5, {from: accounts[3]});
		const uintmssYGV8 = await TetherTokenNdGhUGH.issue.call(uintnn7vYJ, {from: accounts[4]});
		const uintUSCC5uV = await TetherTokenNdGhUGH.allowance.call(addressq9IoSRZ, addresssOybwow, {from: accounts[0]});
		const uintea9EN8 = await TetherTokenNdGhUGH.balanceOf.call(addressR7QHGxU, {from: "0x0000000000000000000000000000000000000001"});
		const addressdQQQzPC = await TetherTokenNdGhUGH.transferFrom.call(addressJjHjRJQ, addresspUOGdph, uintmwWeBq9, {from: accounts[0]});
	});

	it('test for TetherToken', async () => {
		const uintnRw0ydO = BigInt("1565")
		const stringHRB6u2p = "1zXVRG7XtHOvpbBZZskDbg894fcYfqDRkq3nOYcYY6tBpwOaolklds2ESfoWEfa82H99eCNE8OBRKRKVnQHOKpsB"
		const stringlbbtucY = "oUfP6W8rDVNPA0KTSSQEIg7zD"
		const uintmrsAWpH = BigInt("782")
		const TetherTokenqkoEiR = await TetherToken.new(uintnRw0ydO, stringHRB6u2p, stringlbbtucY, uintmrsAWpH, {from: accounts[5]});
		const address1aho6C = accounts[1]
		const uintsCZdtD = BigInt("173")
		const addressCdknzWP = accounts[2]
		const addressR9M68by = accounts[3]
		const uintwVfSqoL = BigInt("1234")
		const addressNxl2d0Q = accounts[2]
		const uintNGtJTti = BigInt("1966")
		const addressxXvwjbg = accounts[0]
		const addressCesEMd5 = accounts[4]
		const addressIx50fA3 = accounts[3]
		const addresskmjo7U = accounts[3]
		const addressyCW8X9 = await TetherTokenqkoEiR.deprecate.call(address1aho6C, {from: accounts[5]});
//		const addressYFUT488 = await TetherTokenqkoEiR.transferFrom.call(addressR9M68by, addressCdknzWP, uintsCZdtD, {from: accounts[1]});
//		const addresslClGU1k = await TetherTokenqkoEiR.approve.call(addressNxl2d0Q, uintwVfSqoL, {from: accounts[3]});
//		const addresskc533zM = await TetherTokenqkoEiR.transferFrom.call(addressCesEMd5, addressxXvwjbg, uintNGtJTti, {from: accounts[1]});
//		const uintfZujaeN = await TetherTokenqkoEiR.allowance.call(addresskmjo7U, addressIx50fA3, {from: accounts[4]});

		await expect(TetherTokenqkoEiR.transferFrom.call(addressR9M68by, addressCdknzWP, uintsCZdtD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintpSHqXAf = BigInt("400")
		const stringBMNCsLa = "Voukvf5O3hJDls5cnE1I1Nbf7vUOkIErURnMvqfT4PSHHvwELQfvQ"
		const stringINalyYN = "scvydYYQcNlL5DpYJQYmBSx4OhV"
		const uintaM9TNp = BigInt("1259")
		const TetherTokenZrGyAq5 = await TetherToken.new(uintpSHqXAf, stringBMNCsLa, stringINalyYN, uintaM9TNp, {from: accounts[4]});
		const uintLYxEzs2 = BigInt("52")
		const uintiXBp8Ed = BigInt("812")
		const addresspxoqpFB = accounts[5]
		const addressMp2EsAC = accounts[4]
		const uintYeN3iIs = BigInt("466")
		const uintrKjx18I = await TetherTokenZrGyAq5.totalSupply.call({from: accounts[1]});
		const uintk6oj6vX = await TetherTokenZrGyAq5.redeem.call(uintLYxEzs2, {from: accounts[4]});
		const uintUBOem2p = await TetherTokenZrGyAq5.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const addresszHQRxmZ = await TetherTokenZrGyAq5.transfer.call(addresspxoqpFB, uintiXBp8Ed, {from: accounts[2]});
//		const addresswAk6SEb = await TetherTokenZrGyAq5.deprecate.call(addressMp2EsAC, {from: accounts[2]});
//		const uintSA2Z7bi = await TetherTokenZrGyAq5.redeem.call(uintYeN3iIs, {from: accounts[0]});

		assert.equal(uintUBOem2p, BigInt("400"))
		assert.equal(uintrKjx18I, BigInt("400"))
		await expect(TetherTokenZrGyAq5.transfer.call(addresspxoqpFB, uintiXBp8Ed, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})