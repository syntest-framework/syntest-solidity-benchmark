const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintMVLyGIy = BigInt("851")
		const stringTyR3krQ = "RmYhLGu1VlEP"
		const stringpCzYhQn = "YYyPYX6BdOxWKzP021uhF23nVEjwr8zZCuX4P3l3nvrnJrpWpxsNicPVfgeREsNQB3cSROQf"
		const GreenMarkTrustcb8TK08 = await GreenMarkTrust.new(uintMVLyGIy, stringTyR3krQ, stringpCzYhQn, {from: accounts[3]});
		const uintW1EARR = BigInt("1405")
		const addresse41kzyK = accounts[1]
		const addressVFCGfPz = accounts[4]
		const uintTan61f = BigInt("2042")
		const addressC7ysIH8 = "0x0000000000000000000000000000000000000001"
		const bytej5dATbg = "0x0909200f17"
		const uintvJ8Akdz = BigInt("1632")
		const addressVb1IeHN = accounts[4]
		const boolIPISYat = await GreenMarkTrustcb8TK08.transferFrom.call(addressVFCGfPz, addresse41kzyK, uintW1EARR, {from: accounts[0]});
		const boolXUxOOA6 = await GreenMarkTrustcb8TK08.transfer.call(addressC7ysIH8, uintTan61f, {from: accounts[4]});
		const boolhlHX11t = await GreenMarkTrustcb8TK08.approveAndCall.call(addressVb1IeHN, uintvJ8Akdz, bytej5dATbg, {from: accounts[1]});

		await expect(GreenMarkTrustcb8TK08.transferFrom.call(addressVFCGfPz, addresse41kzyK, uintW1EARR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintDxQ5GcQ = BigInt("1996")
		const stringVdDDuRI = "Fa3j7zCn7aIlmoQlDg1uuGRRVYxZSylb"
		const stringDHwvdEh = "TFg2ywyHs6eNefVnFWK67smty9VAtv5cndzgRKxaoWmMiIsjRhJs83CaRcJ4loHvKB72633gk6mE"
		const GreenMarkTrustdS4vGaH = await GreenMarkTrust.new(uintDxQ5GcQ, stringVdDDuRI, stringDHwvdEh, {from: accounts[4]});
		const uinthO1KHYj = BigInt("1630")
		const uintbJmv7Dn = BigInt("1864")
		const uintn1Gmqe = BigInt("1122")
		const addressGD22Czd = accounts[4]
		const uintXmErDuG = BigInt("1642")
		const uinteAth85b = BigInt("100")
		const addressaZSEvvV = accounts[2]
		const boolew6gMnr = await GreenMarkTrustdS4vGaH.burn.call(uinthO1KHYj, {from: accounts[4]});
		const boolINr0eWQ = await GreenMarkTrustdS4vGaH.burn.call(uintbJmv7Dn, {from: accounts[3]});
		const booljFy6Pwl = await GreenMarkTrustdS4vGaH.transfer.call(addressGD22Czd, uintn1Gmqe, {from: "0x0000000000000000000000000000000000000001"});
		const boolpXJhchu = await GreenMarkTrustdS4vGaH.burn.call(uintXmErDuG, {from: accounts[3]});
		const boolExc24GU = await GreenMarkTrustdS4vGaH.approve.call(addressaZSEvvV, uinteAth85b, {from: accounts[3]});

		assert.equal(boolew6gMnr, true)
		await expect(GreenMarkTrustdS4vGaH.burn.call(uintbJmv7Dn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintDahSpKa = BigInt("957")
		const stringowBhzcc = "rm2Dkcd5OuM1IY7nqvvDEf1rPIONQckcUTKM2Jlff"
		const stringocBXA4w = "4Nq6bpoW4Pqpvy047idaHE"
		const GreenMarkTrustPN4XlwO = await GreenMarkTrust.new(uintDahSpKa, stringowBhzcc, stringocBXA4w, {from: accounts[3]});
		const uintj1B87HI = BigInt("1121")
		const addressfO34xBH = accounts[2]
		const uinttjSkrJI = BigInt("391")
		const addressLQb58i = accounts[2]
		const booloveq2Dg = await GreenMarkTrustPN4XlwO.transfer.call(addressfO34xBH, uintj1B87HI, {from: accounts[5]});
		const booltstQlQk = await GreenMarkTrustPN4XlwO.transfer.call(addressLQb58i, uinttjSkrJI, {from: accounts[0]});

		await expect(GreenMarkTrustPN4XlwO.transfer.call(addressfO34xBH, uintj1B87HI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintnpKo1E7 = BigInt("440")
		const stringR9Ccspk = "R7ygGGgMy1HWrf9G"
		const string5q7aDr = "G4pHADnPunCgh12bo0KPnlystYGSqJjCIBLegdIhE0yTURkUf9JAo4h7xuPe2VRaTd2o4ypV5a"
		const GreenMarkTrustPHsFxPD = await GreenMarkTrust.new(uintnpKo1E7, stringR9Ccspk, string5q7aDr, {from: accounts[0]});
		const uintDpitjAb = BigInt("1971")
		const addressnSWssgD = accounts[0]
		const uintUaCFdoe = BigInt("396")
		const uintOJ1FDd7 = BigInt("918")
		const addressHtDYG9d = accounts[0]
		const addressMngMtAT = accounts[3]
		const uintjMyDJG3 = BigInt("421")
		const boolsv5btSq = await GreenMarkTrustPHsFxPD.approve.call(addressnSWssgD, uintDpitjAb, {from: accounts[0]});
		const boolwAaupQv = await GreenMarkTrustPHsFxPD.burn.call(uintUaCFdoe, {from: accounts[3]});
		const boolsZ6fSYn = await GreenMarkTrustPHsFxPD.transferFrom.call(addressMngMtAT, addressHtDYG9d, uintOJ1FDd7, {from: accounts[4]});
		const boolWU3vtxq = await GreenMarkTrustPHsFxPD.burn.call(uintjMyDJG3, {from: accounts[0]});

		assert.equal(boolsv5btSq, true)
		await expect(GreenMarkTrustPHsFxPD.burn.call(uintUaCFdoe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintLn5MVmu = BigInt("1251")
		const stringmRmTZYv = "BWgEKxaC51uc3aEwH5NTG6rAbyEyTPMt4U3mORASk3tcpAFh9RHQkv"
		const stringp4XZNGx = "gVq4Y9oMhBvV3XKTk2BiNtfzL6uTnhfXDzg"
		const GreenMarkTrustLv4KKPv = await GreenMarkTrust.new(uintLn5MVmu, stringmRmTZYv, stringp4XZNGx, {from: "0x0000000000000000000000000000000000000001"});
		const uintaTS7mL = BigInt("987")
		const addressHAILwJ2 = accounts[4]
		const byteqhVLHlV = "0x010712031f"
		const uintAVpqQ98 = BigInt("744")
		const addressSwV9os = accounts[4]
		const uintwme2PkE = BigInt("17")
		const addressj1RCKzs = accounts[1]
		const addressxxGPc6D = accounts[0]
		const bytesLfhahY = "0x04180c1b050b050b1906191f11081500"
		const uintY86ZeNA = BigInt("61")
		const addresspVZbGV = accounts[1]
		const uintVSyV2gV = BigInt("1152")
		const boolu5ldTol = await GreenMarkTrustLv4KKPv.burnFrom.call(addressHAILwJ2, uintaTS7mL, {from: accounts[0]});
		const booliY7ynNH = await GreenMarkTrustLv4KKPv.approveAndCall.call(addressSwV9os, uintAVpqQ98, byteqhVLHlV, {from: accounts[0]});
		const boolZph75fd = await GreenMarkTrustLv4KKPv.transferFrom.call(addressxxGPc6D, addressj1RCKzs, uintwme2PkE, {from: accounts[0]});
		const boolRB2eng = await GreenMarkTrustLv4KKPv.approveAndCall.call(addresspVZbGV, uintY86ZeNA, bytesLfhahY, {from: accounts[3]});
		const boolGpZt1Ia = await GreenMarkTrustLv4KKPv.burn.call(uintVSyV2gV, {from: accounts[1]});
	});

	it('test for GreenMarkTrust', async () => {
		const uintI3c0lPC = BigInt("420")
		const stringwyK7K4P = "uOURSvus1Nity9s7X5H3VU1fkJerW7DFu47eUyTPTROgP0UAsORGDF9xlI65wqnvDiw65asLryBn9YNatkYc2A7Ww"
		const stringLyzMZ7 = "T5ujrP68fRtAl0Puw0XE9ipFSdverULrGRYuvqF2FJjjs9sbC1u7TAc5qyVX6GX72vkiaIUYat"
		const GreenMarkTrusteIgjAiN = await GreenMarkTrust.new(uintI3c0lPC, stringwyK7K4P, stringLyzMZ7, {from: accounts[2]});
		const uintUIBcLli = BigInt("1602")
		const addressy3MHztu = accounts[1]
		const uintNViFeLg = BigInt("1149")
		const addressxnAE03k = accounts[4]
		const uint9vf9Fb = BigInt("288")
		const addressBBZr5KO = accounts[3]
		const addresszIjTei = accounts[4]
		const boolQS6l4G = await GreenMarkTrusteIgjAiN.burnFrom.call(addressy3MHztu, uintUIBcLli, {from: accounts[2]});
		const boollPRZF9G = await GreenMarkTrusteIgjAiN.approve.call(addressxnAE03k, uintNViFeLg, {from: accounts[2]});
		const boolWHRhSev = await GreenMarkTrusteIgjAiN.transferFrom.call(addresszIjTei, addressBBZr5KO, uint9vf9Fb, {from: accounts[4]});

		await expect(GreenMarkTrusteIgjAiN.burnFrom.call(addressy3MHztu, uintUIBcLli, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintAVtbdRT = BigInt("1233")
		const stringHpKtOHI = "JlJxoh6fYLXNLDlraLQCIMbpyNWdTrkvrxoI7bUQ0xOgiP9m9Cr4dIxeWFgj9BQeGoctw"
		const stringSYT7EF = "s15jivJLx4ufTXB4BlgPTshusJsx1Lhm4aKNbtpzHJwZzufPCX5bjb0rPOS8"
		const GreenMarkTrustSIonazr = await GreenMarkTrust.new(uintAVtbdRT, stringHpKtOHI, stringSYT7EF, {from: accounts[4]});
		const byteWtPckGx = "0x051715111f161e"
		const uintSzmBjLY = BigInt("464")
		const addressDaF6Hja = accounts[2]
		const uintI1GfTT = BigInt("1601")
		const addressFtaJm3u = accounts[0]
		const uintgjMVowP = BigInt("1295")
		const addressPUJ0Mkq = accounts[0]
		const byte7r9nFR = "0x060518041e1e12070d1810120c07"
		const uintQGaq4wr = BigInt("312")
		const addressQiqefbm = accounts[4]
		const booldDRRye = await GreenMarkTrustSIonazr.approveAndCall.call(addressDaF6Hja, uintSzmBjLY, byteWtPckGx, {from: accounts[3]});
		const booltH9xy4j = await GreenMarkTrustSIonazr.transfer.call(addressFtaJm3u, uintI1GfTT, {from: accounts[1]});
		const boolryGAQEz = await GreenMarkTrustSIonazr.approve.call(addressPUJ0Mkq, uintgjMVowP, {from: accounts[3]});
		const boolkdUbhLt = await GreenMarkTrustSIonazr.approveAndCall.call(addressQiqefbm, uintQGaq4wr, byte7r9nFR, {from: accounts[0]});

		await expect(GreenMarkTrustSIonazr.approveAndCall.call(addressDaF6Hja, uintSzmBjLY, byteWtPckGx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})