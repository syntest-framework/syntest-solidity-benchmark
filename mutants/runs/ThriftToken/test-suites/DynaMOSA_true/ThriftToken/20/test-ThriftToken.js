const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenlYehM8 = await ThriftToken.new({from: accounts[2]});
		const uinto4zUjZx = BigInt("1764")
		const addressj1U285D = accounts[3]
		const addresszNbAlVI = accounts[2]
		const uint1qiX1p = BigInt("144")
		const addressXBRxQFE = accounts[5]
		const boolu50IDj = await ThriftTokenlYehM8.decreaseApproval.call(addressj1U285D, uinto4zUjZx, {from: accounts[3]});
		const uint256ElQ3qxf = await ThriftTokenlYehM8.balanceOf.call(addresszNbAlVI, {from: accounts[2]});
		const boolstfmHvn = await ThriftTokenlYehM8.increaseApproval.call(addressXBRxQFE, uint1qiX1p, {from: accounts[3]});

		await expect(ThriftTokenlYehM8.decreaseApproval.call(addressj1U285D, uinto4zUjZx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenm0m8vuc = await ThriftToken.new({from: accounts[2]});
		const uintCB1FPBv = BigInt("1989")
		const addressRqloyZQ = accounts[3]
		const addressT1A3Nxq = accounts[3]
		const uintGbNBXn3 = BigInt("1159")
		const addressuZKc1UY = accounts[1]
		const addressxJXLnTy = accounts[4]
		const uintLDDTUSR = BigInt("1278")
		const addressf1tYotL = accounts[2]
		const addressZnVnRK8 = accounts[3]
		const addressjM9nZMY = accounts[2]
		const uintGcxkScm = BigInt("1323")
		const addressjYlKaO = accounts[0]
		const uintEboqRUg = BigInt("616")
		const addressNtCPAH4 = accounts[1]
		const boolwTmEgzU = await ThriftTokenm0m8vuc.transferFrom.call(addressT1A3Nxq, addressRqloyZQ, uintCB1FPBv, {from: accounts[3]});
		const boolmsgky78 = await ThriftTokenm0m8vuc.transferFrom.call(addressxJXLnTy, addressuZKc1UY, uintGbNBXn3, {from: accounts[2]});
		const boolWJbpiY = await ThriftTokenm0m8vuc.transferFrom.call(addressZnVnRK8, addressf1tYotL, uintLDDTUSR, {from: accounts[0]});
		const uint256SDgw8NW = await ThriftTokenm0m8vuc.transferableTokens.call(addressjM9nZMY, {from: accounts[0]});
		const boolqUTQG00 = await ThriftTokenm0m8vuc.transfer.call(addressjYlKaO, uintGcxkScm, {from: accounts[4]});
		const boolrQEdgUe = await ThriftTokenm0m8vuc.decreaseApproval.call(addressNtCPAH4, uintEboqRUg, {from: accounts[2]});

		await expect(ThriftTokenm0m8vuc.transferFrom.call(addressT1A3Nxq, addressRqloyZQ, uintCB1FPBv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenxm34KB8 = await ThriftToken.new({from: accounts[0]});
		const uintrCbjfta = BigInt("490")
		const addressmxGMySr = accounts[0]
		const address0idtET = accounts[5]
		const uintl58bH1 = BigInt("932")
		const addressRGgUTrl = "0x0000000000000000000000000000000000000001"
		const boolWVLD6J = await ThriftTokenxm34KB8.increaseApproval.call(addressmxGMySr, uintrCbjfta, {from: accounts[1]});
		const addresszy9BQrd = await ThriftTokenxm34KB8.transferOwnership.call(address0idtET, {from: "0x0000000000000000000000000000000000000001"});
		const boolA22pyXI = await ThriftTokenxm34KB8.transfer.call(addressRGgUTrl, uintl58bH1, {from: accounts[2]});

		assert.equal(boolWVLD6J, true)
		await expect(ThriftTokenxm34KB8.transferOwnership.call(address0idtET, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenjuS0qiO = await ThriftToken.new({from: accounts[2]});
		const addressWEFv888 = accounts[5]
		const addresscbUHyhh = accounts[0]
		const uintjrqPxmd = BigInt("967")
		const addressjnXakLA = accounts[2]
		const uintq4uUA3t = BigInt("327")
		const addresseldRQn = accounts[2]
		const addressmqueXW = accounts[1]
		const addressjNhrjN0 = "0x0000000000000000000000000000000000000001"
		const uint256tN48Vrl = await ThriftTokenjuS0qiO.allowance.call(addresscbUHyhh, addressWEFv888, {from: accounts[4]});
		const booloIazcL = await ThriftTokenjuS0qiO.increaseApproval.call(addressjnXakLA, uintjrqPxmd, {from: accounts[0]});
		const booliIbf2BC = await ThriftTokenjuS0qiO.transfer.call(addresseldRQn, uintq4uUA3t, {from: accounts[0]});
		const uint256gfaWWhe = await ThriftTokenjuS0qiO.allowance.call(addressjNhrjN0, addressmqueXW, {from: accounts[5]});

		assert.equal(booloIazcL, true)
		assert.equal(uint256tN48Vrl, BigInt("0"))
		await expect(ThriftTokenjuS0qiO.transfer.call(addresseldRQn, uintq4uUA3t, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenf35Vgjd = await ThriftToken.new({from: accounts[1]});
		const uintBZeXCZA = BigInt("1466")
		const address3nkdmN = accounts[4]
		const uintylhZEjL = BigInt("1527")
		const addressoLd4SS = accounts[1]
		const uintZoOk1C4 = BigInt("128")
		const addressUEhMsTc = accounts[4]
		const uintAs9dIAQ = BigInt("1049")
		const addressO7DQGte = accounts[2]
		const uintDa6jmjm = BigInt("1315")
		const addressFNMCsRH = accounts[3]
		const boolFwdDPMm = await ThriftTokenf35Vgjd.approve.call(address3nkdmN, uintBZeXCZA, {from: accounts[0]});
		const boolXUX7ztC = await ThriftTokenf35Vgjd.approve.call(addressoLd4SS, uintylhZEjL, {from: accounts[4]});
		const boolOm3tGGD = await ThriftTokenf35Vgjd.decreaseApproval.call(addressUEhMsTc, uintZoOk1C4, {from: accounts[2]});
		const boolX86odl = await ThriftTokenf35Vgjd.decreaseApproval.call(addressO7DQGte, uintAs9dIAQ, {from: accounts[1]});
		const boolTYSDwEX = await ThriftTokenf35Vgjd.approve.call(addressFNMCsRH, uintDa6jmjm, {from: accounts[3]});

		assert.equal(boolFwdDPMm, true)
		assert.equal(boolOm3tGGD, true)
		assert.equal(boolX86odl, true)
		assert.equal(boolXUX7ztC, true)
		await expect(ThriftTokenf35Vgjd.approve.call(addressFNMCsRH, uintDa6jmjm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenwKOF2g = await ThriftToken.new({from: accounts[4]});
		const uintD490TOG = BigInt("1128")
		const addressagX3BTG = accounts[0]
		const uint407j2R = BigInt("21")
		const addressMjptMIG = accounts[0]
		const addressZeXPyyk = accounts[5]
		const uintSTKJ3G5 = BigInt("764")
		const addressmRHLpgN = "0x0000000000000000000000000000000000000001"
		const uinthCtN4Xc = BigInt("1868")
		const addressmhInTx = accounts[1]
		const boolfnj74gy = await ThriftTokenwKOF2g.approve.call(addressagX3BTG, uintD490TOG, {from: accounts[1]});
		const boolg4OPbBP = await ThriftTokenwKOF2g.transferFrom.call(addressZeXPyyk, addressMjptMIG, uint407j2R, {from: accounts[3]});
		const boolsBSnlbs = await ThriftTokenwKOF2g.transfer.call(addressmRHLpgN, uintSTKJ3G5, {from: accounts[2]});
		const boolHEFB4Fe = await ThriftTokenwKOF2g.increaseApproval.call(addressmhInTx, uinthCtN4Xc, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolfnj74gy, true)
		await expect(ThriftTokenwKOF2g.transferFrom.call(addressZeXPyyk, addressMjptMIG, uint407j2R, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenQjXHvJi = await ThriftToken.new({from: accounts[0]});
		const addressgomJmSW = "0x0000000000000000000000000000000000000001"
		const uintNUYAw9p = BigInt("59")
		const addressh19lJ1X = "0x0000000000000000000000000000000000000001"
		const addressfQpwwe3 = accounts[4]
		const uintOkuaopo = BigInt("1173")
		const addressrDMvjQI = accounts[2]
		const addressH12gjlg = accounts[1]
		const uintkKPql0L = BigInt("150")
		const addresssd2ZkTA = accounts[4]
		const uintRgjy1sS = BigInt("1611")
		const addressGP7wi2S = accounts[0]
		const addressYnug9u2 = await ThriftTokenQjXHvJi.transferOwnership.call(addressgomJmSW, {from: accounts[0]});
		const booleUtUoL1 = await ThriftTokenQjXHvJi.transferFrom.call(addressfQpwwe3, addressh19lJ1X, uintNUYAw9p, {from: accounts[4]});
		const boolmOyfgjN = await ThriftTokenQjXHvJi.transferFrom.call(addressH12gjlg, addressrDMvjQI, uintOkuaopo, {from: accounts[4]});
		const boolRGEJnGy = await ThriftTokenQjXHvJi.approve.call(addresssd2ZkTA, uintkKPql0L, {from: accounts[4]});
		const boolCuCFv1A = await ThriftTokenQjXHvJi.approve.call(addressGP7wi2S, uintRgjy1sS, {from: accounts[4]});

		await expect(ThriftTokenQjXHvJi.transferFrom.call(addressfQpwwe3, addressh19lJ1X, uintNUYAw9p, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenw2Hmdpm = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintr7Ggw0t = BigInt("279")
		const addressMLze7yx = accounts[1]
		const uinte6lChvU = BigInt("1868")
		const addressHEe4fb = accounts[2]
		const uintDiYcPT = BigInt("1186")
		const addressoJMWChT = accounts[5]
		const uintippdzI8 = BigInt("831")
		const addressIQUVUYa = accounts[4]
		const addressmrajMf7 = accounts[3]
		const uintqcKGuoP = BigInt("1117")
		const addressR9itetw = accounts[1]
		const boolHRRCp0M = await ThriftTokenw2Hmdpm.decreaseApproval.call(addressMLze7yx, uintr7Ggw0t, {from: accounts[0]});
		const boolVFPap0 = await ThriftTokenw2Hmdpm.decreaseApproval.call(addressHEe4fb, uinte6lChvU, {from: accounts[0]});
		const boolKZ6Zavr = await ThriftTokenw2Hmdpm.increaseApproval.call(addressoJMWChT, uintDiYcPT, {from: accounts[2]});
		const boolydZc1g = await ThriftTokenw2Hmdpm.decreaseApproval.call(addressIQUVUYa, uintippdzI8, {from: accounts[2]});
		const uint256AHZcJzU = await ThriftTokenw2Hmdpm.balanceOf.call(addressmrajMf7, {from: "0x0000000000000000000000000000000000000001"});
		const booljnlwOg = await ThriftTokenw2Hmdpm.transfer.call(addressR9itetw, uintqcKGuoP, {from: accounts[0]});
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenqueC2BP = await ThriftToken.new({from: accounts[1]});
		const addressCXuR1Jv = "0x00000000000000000000000000000000000000-1"
		const uintF6yvEl = BigInt("1101")
		const addressVfsljqf = accounts[1]
		const addressIIRFmH1 = accounts[4]
		const uintc237PmO = BigInt("81")
		const addressRiOdu0K = accounts[0]
		const uintzrM61ND = BigInt("1762")
		const addressyWu9niQ = accounts[2]
		const uint256vfT52k1 = await ThriftTokenqueC2BP.balanceOf.call(addressCXuR1Jv, {from: accounts[3]});
		const boolbCleM9P = await ThriftTokenqueC2BP.transferFrom.call(addressIIRFmH1, addressVfsljqf, uintF6yvEl, {from: accounts[0]});
		const boolDr3KPZ = await ThriftTokenqueC2BP.increaseApproval.call(addressRiOdu0K, uintc237PmO, {from: accounts[3]});
		const boolNuy1ehb = await ThriftTokenqueC2BP.increaseApproval.call(addressyWu9niQ, uintzrM61ND, {from: accounts[4]});

		await expect(ThriftTokenqueC2BP.balanceOf.call(addressCXuR1Jv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})