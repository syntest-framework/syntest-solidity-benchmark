const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintLNJibqc = BigInt("889")
		const stringqoBY11p = "u"
		const stringlJNmti8 = "sHJqPdj79PMlASXUuDnUhLWe"
		const uintU88NOe = BigInt("2030")
		const ANRXTokenvxoFiCl = await ANRXToken.new(uintLNJibqc, stringqoBY11p, stringlJNmti8, uintU88NOe, {from: accounts[1]});
		const uintbkOR4i3 = BigInt("691")
		const addressqVPKQOd = accounts[0]
		const addressrJsTQTH = accounts[0]
		const uintweHcGIT = BigInt("1200")
		const addressaiPCMFI = accounts[4]
		const addresshPD6ebi = accounts[3]
		const uintC1qs6ll = BigInt("1913")
		const addressQo66dHf = accounts[0]
		const uintk3yLqlN = BigInt("1298")
		const uintGD2yA8V = BigInt("341")
		const uintBuiHwqP = BigInt("2026")
		const addressnTa6nKi = accounts[2]
		const boolbyHFCvj = await ANRXTokenvxoFiCl.transferFrom.call(addressrJsTQTH, addressqVPKQOd, uintbkOR4i3, {from: accounts[2]});
		const boolpmOT1Ls = await ANRXTokenvxoFiCl.transferFrom.call(addresshPD6ebi, addressaiPCMFI, uintweHcGIT, {from: accounts[3]});
		const boolyptgxjJ = await ANRXTokenvxoFiCl.transfer.call(addressQo66dHf, uintC1qs6ll, {from: accounts[2]});
		const uintOeLgNpO = await ANRXTokenvxoFiCl.setParams.call(uintGD2yA8V, uintk3yLqlN, {from: accounts[0]});
		const boolvF6BRDW = await ANRXTokenvxoFiCl.approve.call(addressnTa6nKi, uintBuiHwqP, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ANRXTokenvxoFiCl.transferFrom.call(addressrJsTQTH, addressqVPKQOd, uintbkOR4i3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintbPa3Q74 = BigInt("831")
		const stringypsWY2 = "5WVOYBWhEgpI49"
		const stringT9GHdM5 = "EgwScC8dRkHTbf7b7"
		const uintJpvt3D5 = BigInt("412")
		const ANRXTokenCFy25pK = await ANRXToken.new(uintbPa3Q74, stringypsWY2, stringT9GHdM5, uintJpvt3D5, {from: accounts[2]});
		const uintgrZdZd = BigInt("875")
		const uintHNmR4B = BigInt("1082")
		const addressy40JQoc = accounts[0]
		const addressaoTWtkM = accounts[2]
		const addressAhnrBXH = accounts[1]
		const uintq1f6Sgt = await ANRXTokenCFy25pK.redeem.call(uintgrZdZd, {from: "0x0000000000000000000000000000000000000001"});
		const boold5nSNhG = await ANRXTokenCFy25pK.transferFrom.call(addressaoTWtkM, addressy40JQoc, uintHNmR4B, {from: accounts[4]});
		const addressb3bfCs = await ANRXTokenCFy25pK.deprecate.call(addressAhnrBXH, {from: accounts[3]});

		await expect(ANRXTokenCFy25pK.redeem.call(uintgrZdZd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uinttMoAkiP = BigInt("280")
		const stringAlwXZ1L = "4xu4qQ5eIzhuPVlc48qTCzjaqbA89fkv4Q"
		const stringFYWr60B = "18dG7HCSAL3hAekatmnBMPevX564WTchBfLCLBIRTy08c"
		const uintJEfmG3Z = BigInt("1524")
		const ANRXTokenGOFJ6iI = await ANRXToken.new(uinttMoAkiP, stringAlwXZ1L, stringFYWr60B, uintJEfmG3Z, {from: accounts[3]});
		const addressvP6klmC = accounts[2]
		const addressYTWFz2q = accounts[0]
		const uintZFLfuJ = BigInt("2033")
		const uintBccRa8p = BigInt("839")
		const uintPdFQuC3 = BigInt("1324")
		const addressnHyxEun = accounts[4]
		const uintCZ0PdH4 = await ANRXTokenGOFJ6iI.totalSupply.call({from: accounts[4]});
		const uintgbGpXXu = await ANRXTokenGOFJ6iI.allowance.call(addressYTWFz2q, addressvP6klmC, {from: accounts[4]});
		const uintTJE0Eb = await ANRXTokenGOFJ6iI.setParams.call(uintBccRa8p, uintZFLfuJ, {from: accounts[2]});
		const bool5IIdsd = await ANRXTokenGOFJ6iI.approve.call(addressnHyxEun, uintPdFQuC3, {from: accounts[5]});

		assert.equal(uintCZ0PdH4, BigInt("280"))
		assert.equal(uintgbGpXXu, BigInt("0"))
		await expect(ANRXTokenGOFJ6iI.setParams.call(uintBccRa8p, uintZFLfuJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintaFHTrIy = BigInt("221")
		const stringvV7usIh = "Oyu1VEiruHRvSqGEBJuQcMNsKagYUWkPyixeWGVshno3tqkmErdTIAbCXc24WPFUsqbRjJLckSRA"
		const stringZMFRwiL = "W1U"
		const uintloVSi2K = BigInt("485")
		const ANRXToken4uZPrJ = await ANRXToken.new(uintaFHTrIy, stringvV7usIh, stringZMFRwiL, uintloVSi2K, {from: "0x0000000000000000000000000000000000000001"});
		const uintz6XlppL = BigInt("293")
		const addressohI7dka = accounts[3]
		const uintdoasw2o = BigInt("1964")
		const addressJdTrXcU = "0x0000000000000000000000000000000000000001"
		const uintjVo6pAh = await ANRXToken4uZPrJ.redeem.call(uintz6XlppL, {from: accounts[1]});
		const uintyezAD8h = await ANRXToken4uZPrJ.totalSupply.call({from: accounts[5]});
		const uintM5OtI0b = await ANRXToken4uZPrJ.totalSupply.call({from: accounts[1]});
		const addressqt9Q63m = await ANRXToken4uZPrJ.deprecate.call(addressohI7dka, {from: accounts[3]});
		const uinthqNc9FM = await ANRXToken4uZPrJ.redeem.call(uintdoasw2o, {from: accounts[0]});
		const uintI0A2Oba = await ANRXToken4uZPrJ.balanceOf.call(addressJdTrXcU, {from: accounts[4]});
	});

	it('test for ANRXToken', async () => {
		const uintZV5QcEw = BigInt("1015")
		const string84qS0R = "bYeTLUy1Hmju5bEjGgcXC8lS2PYhGfpK85wmyuipGnoDqNwwxAKSa2ZNxlsidtXZu4tzpQaTX0xY"
		const stringD6sNpWG = "bzDhI6ke6sb9lX4PROuQPsVoXYTYvm7RYlKpDQIUTVPht5aCtHHovoIfCF5YI1nuxblUFwVQcgQEhlrxGEwV"
		const uintOGZFbOU = BigInt("344")
		const ANRXTokencKE1AlZ = await ANRXToken.new(uintZV5QcEw, string84qS0R, stringD6sNpWG, uintOGZFbOU, {from: accounts[0]});
		const addressf0gmFJY = accounts[4]
		const addressJMuV2iE = accounts[2]
		const uintnhTevbz = await ANRXTokencKE1AlZ.balanceOf.call(addressf0gmFJY, {from: accounts[4]});
		const uintDCKYt8O = await ANRXTokencKE1AlZ.balanceOf.call(addressJMuV2iE, {from: accounts[5]});

		assert.equal(uintDCKYt8O, BigInt("0"))
		assert.equal(uintnhTevbz, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintH7YXd5T = BigInt("965")
		const stringr0sbngY = "Na7GVJpnxLBFfnps7j55N3dpZyaGU1fDJfkw8dCpX7n9WvnbdSYXuoBqOTEEY5AIz35DKfFp4wQ03nrhF"
		const stringfpwBXzk = "Rhkbgj71rkVDshrO3XhY0oIDoDb2u1zzb7z313QHwau60zLyOjkheP2hwPsWBGN4cbiwzzqrgFr4ft5fKcM"
		const uintYxgGEW = BigInt("467")
		const ANRXTokenz5m1pCg = await ANRXToken.new(uintH7YXd5T, stringr0sbngY, stringfpwBXzk, uintYxgGEW, {from: accounts[0]});
		const uintXWOtR9G = BigInt("286")
		const addressOT0aXwR = accounts[1]
		const uintHI2PL7e = BigInt("1677")
		const addressM4vr8JE = accounts[4]
		const addressngDt2ps = accounts[3]
		const uintGHcHTWp = BigInt("1069")
		const booluySAB2 = await ANRXTokenz5m1pCg.approve.call(addressOT0aXwR, uintXWOtR9G, {from: accounts[2]});
		const boolTT9SNyY = await ANRXTokenz5m1pCg.transferFrom.call(addressngDt2ps, addressM4vr8JE, uintHI2PL7e, {from: accounts[4]});
		const uintX9mbp8j = await ANRXTokenz5m1pCg.redeem.call(uintGHcHTWp, {from: accounts[2]});

		assert.equal(booluySAB2, true)
		await expect(ANRXTokenz5m1pCg.transferFrom.call(addressngDt2ps, addressM4vr8JE, uintHI2PL7e, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintpMe6xaJ = BigInt("280")
		const stringAlwXZ1L = "4xu4qQ5eIzhuPVlc48qTCzjaqbA89fkv4Q"
		const stringFYWr60B = "18dG7HCSAL3hAekatmnBMPevX564WTchBfLCLBIRTy08c"
		const uintSIxFFvZ = BigInt("1524")
		const ANRXTokenGOFJ6iI = await ANRXToken.new(uintpMe6xaJ, stringAlwXZ1L, stringFYWr60B, uintSIxFFvZ, {from: accounts[3]});
		const addressxYyP4Bh = accounts[2]
		const addresscHeX5F = accounts[1]
		const uint0MQOpj = BigInt("1324")
		const addressg0SNMWJ = accounts[4]
		const uintHRvzSv5 = BigInt("628")
		const addressh4mOLOF = accounts[1]
		const uintCZ0PdH4 = await ANRXTokenGOFJ6iI.totalSupply.call({from: accounts[4]});
		const uintyI530Qv = await ANRXTokenGOFJ6iI.totalSupply.call({from: accounts[0]});
		const uintgbGpXXu = await ANRXTokenGOFJ6iI.allowance.call(addresscHeX5F, addressxYyP4Bh, {from: accounts[4]});
		const bool5IIdsd = await ANRXTokenGOFJ6iI.approve.call(addressg0SNMWJ, uint0MQOpj, {from: accounts[5]});
		const boolWbxyvAC = await ANRXTokenGOFJ6iI.transfer.call(addressh4mOLOF, uintHRvzSv5, {from: accounts[0]});

		assert.equal(bool5IIdsd, true)
		assert.equal(uintCZ0PdH4, BigInt("280"))
		assert.equal(uintgbGpXXu, BigInt("0"))
		assert.equal(uintyI530Qv, BigInt("280"))
		await expect(ANRXTokenGOFJ6iI.transfer.call(addressh4mOLOF, uintHRvzSv5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintiM2zgE = BigInt("1015")
		const string84qS0R = "bYeTLUy1Hmju5bEjGgcXC8lS2PYhGfpK85wmyuipGnoDqNwwxAKSa2ZNxlsidtXZu4tzpQaTX0xY"
		const stringD6sNpWG = "bzDhI6ke6sb9lX4PROuQPsVoXYTYvm7RYlKpDQIUTVPht5aCtHHovoIfCF5YI1nuxblUFwVQcgQEhlrxGEwV"
		const uintJlEYbht = BigInt("344")
		const ANRXTokencKE1AlZ = await ANRXToken.new(uintiM2zgE, string84qS0R, stringD6sNpWG, uintJlEYbht, {from: accounts[0]});
		const addressX44uwbA = accounts[4]
		const addressAsTfPO4 = accounts[3]
		const uintrVanV93 = BigInt("701")
		const uintJHS873N = BigInt("467")
		const addresskwEX3Ev = accounts[0]
		const uintnhTevbz = await ANRXTokencKE1AlZ.balanceOf.call(addressX44uwbA, {from: accounts[4]});
		const uintDCKYt8O = await ANRXTokencKE1AlZ.balanceOf.call(addressAsTfPO4, {from: accounts[5]});
		const uintnPzCPxU = await ANRXTokencKE1AlZ.setParams.call(uintJHS873N, uintrVanV93, {from: accounts[0]});
		const uinterIU4vK = await ANRXTokencKE1AlZ.balanceOf.call(addresskwEX3Ev, {from: accounts[2]});

		assert.equal(uintDCKYt8O, BigInt("0"))
		assert.equal(uintnhTevbz, BigInt("0"))
		await expect(ANRXTokencKE1AlZ.setParams.call(uintJHS873N, uintrVanV93, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintxvRTqTK = BigInt("1015")
		const string84qS0R = "bYeTLUy1Hmju5bEjGgcXC8lS2PYhGfpK85wmyuipGnoDqNwwxAKSa2ZNxlsidtXZu4tzpQaTX0xY"
		const stringD6sNpWG = "bzDhI6ke6sb9lX4PROuQPsVoXYTYvm7RYlKpDQIUTVPht5aCtHHovoIfCF5YI1nuxblUFwVQcgQEhlrxGEwV"
		const uintrrZ8XgW = BigInt("344")
		const ANRXTokencKE1AlZ = await ANRXToken.new(uintxvRTqTK, string84qS0R, stringD6sNpWG, uintrrZ8XgW, {from: accounts[0]});
		const addressGiU2GMW = accounts[4]
		const uintiCmZCOS = BigInt("1238")
		const addressukKmZyJ = accounts[2]
		const addressyN5HSXK = accounts[3]
		const uintIKkdYY = BigInt("1654")
		const uintnhTevbz = await ANRXTokencKE1AlZ.balanceOf.call(addressGiU2GMW, {from: accounts[4]});
		const booliCKE0M6 = await ANRXTokencKE1AlZ.approve.call(addressukKmZyJ, uintiCmZCOS, {from: accounts[3]});
		const uintDCKYt8O = await ANRXTokencKE1AlZ.balanceOf.call(addressyN5HSXK, {from: accounts[5]});
		const uintaUCX1Fk = await ANRXTokencKE1AlZ.redeem.call(uintIKkdYY, {from: accounts[0]});

		assert.equal(booliCKE0M6, true)
		assert.equal(uintDCKYt8O, BigInt("0"))
		assert.equal(uintnhTevbz, BigInt("0"))
		await expect(ANRXTokencKE1AlZ.redeem.call(uintIKkdYY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintnCaSAIT = BigInt("1273")
		const stringxNLpjSM = "D1Sks3ZruNkcRyQueIqa6UVPFbr5ddbgBfyvEHiM2zUzvOwqWuWqE8Uf8g7vfyucMy1C8gKqHmT"
		const stringfTvHANH = "iIgBMOo3E9HClPvzjPPUHoIKL76miWaQdoO"
		const uintM4JZMql = BigInt("1426")
		const ANRXTokenzzgk6rQ = await ANRXToken.new(uintnCaSAIT, stringxNLpjSM, stringfTvHANH, uintM4JZMql, {from: accounts[3]});
		const addressuIAzJqg = accounts[5]
		const addressRonEgmj = accounts[2]
		const addressFhAabbm = "0x0000000000000000000000000000000000000001"
		const addressX6yoxGm = await ANRXTokenzzgk6rQ.deprecate.call(addressuIAzJqg, {from: accounts[3]});
		const uintbI0uGf = await ANRXTokenzzgk6rQ.allowance.call(addressFhAabbm, addressRonEgmj, {from: accounts[0]});

		assert.equal(uintbI0uGf, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintCNbSMvU = BigInt("1273")
		const stringxNLpjSM = "D1Sks3ZruNkcRyQueIqa6UVPFbr5ddbgBfyvEHiM2zUzvOwqWuWqE8Uf8g7vfyucMy1C8gKqHmT"
		const stringfTvHANH = "iIgBMOo3E9HClPvzjPPUHoIKL76miWaQdoO"
		const uintDr4Uxen = BigInt("1426")
		const ANRXTokenzzgk6rQ = await ANRXToken.new(uintCNbSMvU, stringxNLpjSM, stringfTvHANH, uintDr4Uxen, {from: accounts[3]});
		const uintHs6f8uz = BigInt("103")
		const addressnUcGlmf = accounts[4]
		const addressX1jp1z = "0x0000000000000000000000000000000000000001"
		const addressor79t18 = accounts[4]
		const uintOU6EZ1D = await ANRXTokenzzgk6rQ.issue.call(uintHs6f8uz, {from: accounts[3]});
		const uintbI0uGf = await ANRXTokenzzgk6rQ.allowance.call(addressX1jp1z, addressnUcGlmf, {from: accounts[0]});
		const addressnOviC2O = await ANRXTokenzzgk6rQ.deprecate.call(addressor79t18, {from: accounts[3]});

		assert.equal(uintbI0uGf, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintXoCaNqf = BigInt("981")
		const stringV19wbhd = "k3IvOToEPsTIMlzaKP9XibbSU5NeHLSy5AybxEJHyt9MWFH2K777Dul8VAtPOjAk7pGVS7oYJq5LphL2sjPIoUj8O4PMGwaXnR"
		const stringjps74m = "ZvCL1GNOlm8ilvNyo4Ntow5VYMg1hgSBpTjj2Yx9emSuOikDJLL8nfzgukjyVuXgZ"
		const uintov3HsUR = BigInt("1070")
		const ANRXTokenVrWzD7j = await ANRXToken.new(uintXoCaNqf, stringV19wbhd, stringjps74m, uintov3HsUR, {from: accounts[1]});
		const uintoNDxhNi = BigInt("11")
		const uintVARchPA = BigInt("1087")
		const uintOjfe4Pf = BigInt("260")
		const uintO8SCNp2 = BigInt("2038")
		const addresszgJfjp = accounts[1]
		const uintUnXUOG = BigInt("742")
		const addressDXsgu6m = accounts[4]
		const addressvEnjklG = accounts[1]
		const uint0uj1Ip = await ANRXTokenVrWzD7j.redeem.call(uintoNDxhNi, {from: accounts[1]});
		const uintPIqMQg9 = await ANRXTokenVrWzD7j.redeem.call(uintVARchPA, {from: accounts[0]});
		const uintfJTys0X = await ANRXTokenVrWzD7j.setParams.call(uintO8SCNp2, uintOjfe4Pf, {from: accounts[1]});
		const addresssPu4415 = await ANRXTokenVrWzD7j.deprecate.call(addresszgJfjp, {from: accounts[4]});
		const boolouJY9q = await ANRXTokenVrWzD7j.transferFrom.call(addressvEnjklG, addressDXsgu6m, uintUnXUOG, {from: accounts[4]});

		await expect(ANRXTokenVrWzD7j.redeem.call(uintVARchPA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})