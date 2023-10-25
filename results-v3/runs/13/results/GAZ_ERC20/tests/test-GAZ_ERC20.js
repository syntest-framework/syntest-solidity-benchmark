const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20wl38Ri = await GAZ_ERC20.new({from: accounts[4]});
		const uintWo7a7Ml = BigInt("1698")
		const addressjAUs0WB = accounts[0]
		const addressCF4tE2j = accounts[4]
		const addressjpfh91I = accounts[4]
		const uintSlS9AG = BigInt("744")
		const addressKHtXsVl = accounts[4]
		const uintZIyEbat = BigInt("1104")
		const addressiPHixjP = accounts[5]
		const uint8WRLeZ = BigInt("1649")
		const addressYyff0bf = accounts[1]
		const boolWGnQrQu = await GAZ_ERC20wl38Ri.transfer.call(addressjAUs0WB, uintWo7a7Ml, {from: accounts[1]});
		const boolaFR6quB = await GAZ_ERC20wl38Ri.approve.call(addressCF4tE2j, {from: accounts[0]});
		const boolOmColZb = await GAZ_ERC20wl38Ri.approve.call(addressjpfh91I, {from: "0x0000000000000000000000000000000000000001"});
		const boolkZQ8CXM = await GAZ_ERC20wl38Ri.transfer.call(addressKHtXsVl, uintSlS9AG, {from: accounts[4]});
		const boolu4sxp4S = await GAZ_ERC20wl38Ri.transfer.call(addressiPHixjP, uintZIyEbat, {from: accounts[3]});
		const boolFtIPiqO = await GAZ_ERC20wl38Ri.transfer.call(addressYyff0bf, uint8WRLeZ, {from: accounts[0]});

		await expect(GAZ_ERC20wl38Ri.transfer.call(addressjAUs0WB, uintWo7a7Ml, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20mbYm5HC = await GAZ_ERC20.new({from: accounts[3]});
		const uintPO2fykk = BigInt("1553")
		const addressri78I3s = accounts[0]
		const addressxnPGsaf = accounts[2]
		const uintlff27Lv = BigInt("426")
		const addressJxX6Nz = accounts[2]
		const addressJrLKmO = accounts[4]
		const addresseyiYBGI = accounts[2]
		const uintznBxRdX = BigInt("1068")
		const addressm7VW4cf = accounts[1]
		const boolJzCLYby = await GAZ_ERC20mbYm5HC.approve.call(addressri78I3s, uintPO2fykk, {from: accounts[4]});
		const boolCy7WdMV = await GAZ_ERC20mbYm5HC.approve.call(addressxnPGsaf, {from: accounts[0]});
		const boolOhTEJ47 = await GAZ_ERC20mbYm5HC.approve.call(addressJxX6Nz, uintlff27Lv, {from: accounts[4]});
		const boolnKPe5vP = await GAZ_ERC20mbYm5HC.approve.call(addressJrLKmO, {from: accounts[1]});
		const boolqjWrzka = await GAZ_ERC20mbYm5HC.approve.call(addresseyiYBGI, {from: accounts[2]});
		const boolIf4HYJY = await GAZ_ERC20mbYm5HC.approve.call(addressm7VW4cf, uintznBxRdX, {from: accounts[3]});

		assert.equal(boolJzCLYby, true)
		await expect(GAZ_ERC20mbYm5HC.approve.call(addressxnPGsaf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Jnwm7Si = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addressBE5lu75 = accounts[5]
		const addresseidYUf4 = accounts[0]
		const uintjJ5Fbme = BigInt("979")
		const addressPIaBGBz = accounts[3]
		const uintoC53dVN = BigInt("1596")
		const addressHxcjyxl = accounts[2]
		const uintTkk6LgH = BigInt("1474")
		const addressIPHvUkp = accounts[3]
		const boolAsX98Gi = await GAZ_ERC20Jnwm7Si.approve.call(addressBE5lu75, {from: accounts[1]});
		const boolAsTgBVd = await GAZ_ERC20Jnwm7Si.approve.call(addresseidYUf4, {from: accounts[5]});
		const boolhfK8FG = await GAZ_ERC20Jnwm7Si.approve.call(addressPIaBGBz, uintjJ5Fbme, {from: accounts[2]});
		const booluBUedzd = await GAZ_ERC20Jnwm7Si.transfer.call(addressHxcjyxl, uintoC53dVN, {from: accounts[5]});
		const boolfVcdoPa = await GAZ_ERC20Jnwm7Si.approve.call(addressIPHvUkp, uintTkk6LgH, {from: accounts[3]});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20lhoCal = await GAZ_ERC20.new({from: accounts[2]});
		const addressk5WdRfc = accounts[4]
		const uintLZSklCZ = BigInt("1469")
		const address92bpOq = accounts[2]
		const uintiKsAaLu = BigInt("340")
		const addressXGPgzf = accounts[3]
		const addressT43QRPp = accounts[2]
		const boolnRW08fB = await GAZ_ERC20lhoCal.approve.call(addressk5WdRfc, {from: accounts[1]});
		const boolPlv1ydF = await GAZ_ERC20lhoCal.transfer.call(address92bpOq, uintLZSklCZ, {from: "0x0000000000000000000000000000000000000001"});
		const boolSIEX9i = await GAZ_ERC20lhoCal.transferFrom.call(addressT43QRPp, addressXGPgzf, uintiKsAaLu, {from: accounts[1]});

		await expect(GAZ_ERC20lhoCal.approve.call(addressk5WdRfc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20W3tt6MM = await GAZ_ERC20.new({from: accounts[2]});
		const uintwxNJWdl = BigInt("1980")
		const addressCqIL7S8 = accounts[3]
		const addressFmPiffn = "0x0000000000000000000000000000000000000001"
		const uintEzTWCWU = BigInt("1059")
		const addressElQXCdc = "0x0000000000000000000000000000000000000001"
		const addressySTAy6m = "0x0000000000000000000000000000000000000001"
		const uintoZzCuAV = BigInt("600")
		const addressSv9teWe = accounts[3]
		const uintUPnm0r5 = BigInt("92")
		const addressiT4QtDt = accounts[5]
		const addressOa4qxDv = accounts[1]
		const boollCizrLR = await GAZ_ERC20W3tt6MM.approve.call(addressCqIL7S8, uintwxNJWdl, {from: accounts[2]});
		const bool2mJIyq = await GAZ_ERC20W3tt6MM.approve.call(addressFmPiffn, {from: accounts[5]});
		const boolnNP0QD0 = await GAZ_ERC20W3tt6MM.approve.call(addressElQXCdc, uintEzTWCWU, {from: accounts[3]});
		const boolVwSRkQF = await GAZ_ERC20W3tt6MM.approve.call(addressySTAy6m, {from: accounts[4]});
		const boolxaRa1iG = await GAZ_ERC20W3tt6MM.transfer.call(addressSv9teWe, uintoZzCuAV, {from: accounts[4]});
		const boolZQhZ3wC = await GAZ_ERC20W3tt6MM.transferFrom.call(addressOa4qxDv, addressiT4QtDt, uintUPnm0r5, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boollCizrLR, true)
		await expect(GAZ_ERC20W3tt6MM.approve.call(addressFmPiffn, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20RCPJppC = await GAZ_ERC20.new({from: accounts[1]});
		const uintuBq9mfM = BigInt("975")
		const addresseBaNvvb = accounts[2]
		const addressgXrP9ut = accounts[3]
		const addressPXJmUmm = accounts[1]
		const boolAQAGm2Y = await GAZ_ERC20RCPJppC.transferFrom.call(addressgXrP9ut, addresseBaNvvb, uintuBq9mfM, {from: accounts[1]});
		const boolBBlkfDp = await GAZ_ERC20RCPJppC.approve.call(addressPXJmUmm, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GAZ_ERC20RCPJppC.transferFrom.call(addressgXrP9ut, addresseBaNvvb, uintuBq9mfM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Klj3olu = await GAZ_ERC20.new({from: accounts[4]});
		const uintZWBEj2T = BigInt("1577")
		const addressfYN5Lap = accounts[1]
		const uintey3hhFA = BigInt("1434")
		const addressXSVDz0m = accounts[0]
		const addressW4NwdqA = accounts[1]
		const uintDGPzySj = BigInt("267")
		const addressxx2MbW = accounts[2]
		const uintjTcSZP2 = BigInt("2031")
		const addressKqVe5g7 = accounts[4]
		const boolmXV02zH = await GAZ_ERC20Klj3olu.approve.call(addressfYN5Lap, uintZWBEj2T, {from: accounts[0]});
		const boollJ79NmD = await GAZ_ERC20Klj3olu.transfer.call(addressXSVDz0m, uintey3hhFA, {from: accounts[4]});
		const boolaLqegwC = await GAZ_ERC20Klj3olu.approve.call(addressW4NwdqA, {from: accounts[0]});
		const boolhumkoPG = await GAZ_ERC20Klj3olu.approve.call(addressxx2MbW, uintDGPzySj, {from: accounts[0]});
		const boolcYUUKVu = await GAZ_ERC20Klj3olu.transfer.call(addressKqVe5g7, uintjTcSZP2, {from: accounts[1]});

		assert.equal(boollJ79NmD, true)
		assert.equal(boolmXV02zH, true)
		await expect(GAZ_ERC20Klj3olu.approve.call(addressW4NwdqA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20RCPJppC = await GAZ_ERC20.new({from: accounts[1]});
		const addressUDTxTRx = accounts[1]
		const boolBBlkfDp = await GAZ_ERC20RCPJppC.approve.call(addressUDTxTRx, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GAZ_ERC20RCPJppC.approve.call(addressUDTxTRx, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Sn5Dqwh = await GAZ_ERC20.new({from: accounts[1]});
		const addressUWJ3b9 = accounts[4]
		const uintqBaI7I = BigInt("25")
		const address4XBsjH = accounts[3]
		const uintIm8uJvf = BigInt("1694")
		const addressqKubgu = "0x0000000000000000000000000000000000000001"
		const boolU4OmzNb = await GAZ_ERC20Sn5Dqwh.approve.call(addressUWJ3b9, {from: accounts[2]});
		const boolm8XQovR = await GAZ_ERC20Sn5Dqwh.approve.call(address4XBsjH, uintqBaI7I, {from: accounts[1]});
		const boolW0TCTi0 = await GAZ_ERC20Sn5Dqwh.approve.call(addressqKubgu, uintIm8uJvf, {from: accounts[3]});

		await expect(GAZ_ERC20Sn5Dqwh.approve.call(addressUWJ3b9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20RCPJppC = await GAZ_ERC20.new({from: accounts[1]});
		const addressscFm3q6 = accounts[0]
		const uintS1UqXik = BigInt("805")
		const addressyTg4WE7 = accounts[1]
		const addressfDMPtz = accounts[2]
		const bools7AXLan = await GAZ_ERC20RCPJppC.approve.call(addressscFm3q6, {from: accounts[3]});
		const boolFYlNI6G = await GAZ_ERC20RCPJppC.transfer.call(addressyTg4WE7, uintS1UqXik, {from: accounts[0]});
		const boolBBlkfDp = await GAZ_ERC20RCPJppC.approve.call(addressfDMPtz, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GAZ_ERC20RCPJppC.approve.call(addressscFm3q6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20VzXCy2r = await GAZ_ERC20.new({from: accounts[4]});
		const addressdICYgXW = accounts[0]
		const addressplGqDpK = accounts[0]
		const uintKVD8ojT = BigInt("1661")
		const addressOd4yyD0 = accounts[3]
		const uintWBaQ2ZR = BigInt("11")
		const addressfYX79di = accounts[3]
		const addressMSDphH7 = accounts[0]
		const uintxjderS4 = BigInt("1388")
		const addressMbS6CJH = accounts[3]
		const boolJQqwoMX = await GAZ_ERC20VzXCy2r.approve.call(addressdICYgXW, {from: accounts[4]});
		const boolpuABpIG = await GAZ_ERC20VzXCy2r.approve.call(addressplGqDpK, {from: accounts[4]});
		const boolEBfjgOS = await GAZ_ERC20VzXCy2r.approve.call(addressOd4yyD0, uintKVD8ojT, {from: "0x0000000000000000000000000000000000000001"});
		const boolQXdNVfG = await GAZ_ERC20VzXCy2r.transferFrom.call(addressMSDphH7, addressfYX79di, uintWBaQ2ZR, {from: "0x0000000000000000000000000000000000000001"});
		const boolzUOTtUi = await GAZ_ERC20VzXCy2r.approve.call(addressMbS6CJH, uintxjderS4, {from: accounts[5]});

		await expect(GAZ_ERC20VzXCy2r.approve.call(addressdICYgXW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})