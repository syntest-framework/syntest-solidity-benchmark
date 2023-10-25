const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinVTK4Q1 = await EdenCoin.new({from: accounts[3]});
		const uintn7jlUk = BigInt("188")
		const addressXzPAums = accounts[4]
		const uintFqBgGRm = BigInt("980")
		const addressG8qZxwp = accounts[2]
		const boolernD4yp = await EdenCoinVTK4Q1.approve.call(addressXzPAums, uintn7jlUk, {from: accounts[1]});
		const boold1cWA31 = await EdenCoinVTK4Q1.approve.call(addressG8qZxwp, uintFqBgGRm, {from: accounts[4]});

		assert.equal(boold1cWA31, true)
		assert.equal(boolernD4yp, true)
	});

	it('test for EdenCoin', async () => {
		const EdenCoinz1Gzz3d = await EdenCoin.new({from: accounts[4]});
		const uintuGrLNHl = BigInt("423")
		const addressqgtFuCe = accounts[3]
		const addressnI9lzsM = accounts[3]
		const uintVYkt7BW = BigInt("315")
		const addresssAdQazN = accounts[1]
		const addressTkeaUGi = accounts[0]
		const uintGeMEmz8 = BigInt("823")
		const addressuv5IZQ = "0x0000000000000000000000000000000000000001"
//		const boolvkihRt = await EdenCoinz1Gzz3d.transferFrom.call(addressnI9lzsM, addressqgtFuCe, uintuGrLNHl, {from: accounts[0]});
//		const booloY3LVc = await EdenCoinz1Gzz3d.transferFrom.call(addressTkeaUGi, addresssAdQazN, uintVYkt7BW, {from: accounts[2]});
//		const booldtvosq4 = await EdenCoinz1Gzz3d.transfer.call(addressuv5IZQ, uintGeMEmz8, {from: accounts[0]});

		await expect(EdenCoinz1Gzz3d.transferFrom.call(addressnI9lzsM, addressqgtFuCe, uintuGrLNHl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinLKpqHxz = await EdenCoin.new({from: accounts[3]});
		const uintOYMPM6h = BigInt("844")
		const addresspLa9jvq = accounts[4]
		const uintgYCoxb4 = BigInt("310")
		const addressSnKZO6A = accounts[0]
		const addressPbzZZXi = accounts[4]
		const boolHMhxSr4 = await EdenCoinLKpqHxz.increaseApproval.call(addresspLa9jvq, uintOYMPM6h, {from: accounts[5]});
//		const bool9i1Sx4 = await EdenCoinLKpqHxz.transferFrom.call(addressPbzZZXi, addressSnKZO6A, uintgYCoxb4, {from: accounts[4]});

		assert.equal(boolHMhxSr4, true)
		await expect(EdenCoinLKpqHxz.transferFrom.call(addressPbzZZXi, addressSnKZO6A, uintgYCoxb4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinTopCnZT = await EdenCoin.new({from: accounts[2]});
		const addressNO3PD8J = accounts[2]
		const addressJ4CiDU = accounts[2]
		const addressLeJEV0R = accounts[0]
		const addresslrpGrhI = accounts[3]
		const addressuchEs8k = accounts[2]
		const uinteQ1K8NG = BigInt("692")
		const addressAsN59AD = accounts[4]
		const uint2563QhXFU = await EdenCoinTopCnZT.balanceOf.call(addressNO3PD8J, {from: accounts[1]});
		const uint256tlSCEfk = await EdenCoinTopCnZT.allowance.call(addressLeJEV0R, addressJ4CiDU, {from: accounts[5]});
		const uint256CzLNRYe = await EdenCoinTopCnZT.allowance.call(addressuchEs8k, addresslrpGrhI, {from: accounts[0]});
		const booloyg7aXf = await EdenCoinTopCnZT.approve.call(addressAsN59AD, uinteQ1K8NG, {from: accounts[0]});

		assert.equal(booloyg7aXf, true)
		assert.equal(uint2563QhXFU, BigInt("1000000000000000000000000000"))
		assert.equal(uint256CzLNRYe, BigInt("0"))
		assert.equal(uint256tlSCEfk, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinAM5xzVk = await EdenCoin.new({from: accounts[0]});
		const uintcBtO6qL = BigInt("1667")
		const addressuepRgZ5 = accounts[1]
		const uintptBYrPs = BigInt("1636")
		const addressdaDeab1 = accounts[2]
		const addressvn2x7eN = accounts[4]
		const addressE9CdAPw = accounts[1]
		const boolKan5AKM = await EdenCoinAM5xzVk.transfer.call(addressuepRgZ5, uintcBtO6qL, {from: accounts[0]});
//		const boolMFlKpKK = await EdenCoinAM5xzVk.transfer.call(addressdaDeab1, uintptBYrPs, {from: accounts[1]});
//		const uint256EsjjiPy = await EdenCoinAM5xzVk.allowance.call(addressE9CdAPw, addressvn2x7eN, {from: accounts[4]});

		assert.equal(boolKan5AKM, true)
		await expect(EdenCoinAM5xzVk.transfer.call(addressdaDeab1, uintptBYrPs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoin5mXTBM = await EdenCoin.new({from: accounts[5]});
		const uintgG23oVI = BigInt("312")
		const addresstWIWBCF = accounts[1]
		const uintHPmQCse = BigInt("755")
		const addressgVu6Qad = accounts[5]
		const uinthxoiFqe = BigInt("917")
		const addressxlcieZv = accounts[2]
		const boollWuNfBE = await EdenCoin5mXTBM.approve.call(addresstWIWBCF, uintgG23oVI, {from: accounts[1]});
		const booluKi1444 = await EdenCoin5mXTBM.decreaseApproval.call(addressgVu6Qad, uintHPmQCse, {from: accounts[3]});
		const boolpTXbeq5 = await EdenCoin5mXTBM.approve.call(addressxlcieZv, uinthxoiFqe, {from: accounts[3]});

		assert.equal(boollWuNfBE, true)
		assert.equal(boolpTXbeq5, true)
		assert.equal(booluKi1444, true)
	});

	it('test for EdenCoin', async () => {
		const EdenCoinCaxb5H = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintHsBfqsh = BigInt("730")
		const addressHeREeF = accounts[5]
		const uint8ZM28X = BigInt("791")
		const addressqioo5mL = accounts[2]
		const uintzFovva = BigInt("1937")
		const addresskn6Ita6 = accounts[1]
		const addressK845cCi = accounts[0]
		const boolmC3DB9e = await EdenCoinCaxb5H.transfer.call(addressHeREeF, uintHsBfqsh, {from: accounts[4]});
		const boolRpk1Yk = await EdenCoinCaxb5H.transfer.call(addressqioo5mL, uint8ZM28X, {from: accounts[1]});
		const boolk2bR2E3 = await EdenCoinCaxb5H.transferFrom.call(addressK845cCi, addresskn6Ita6, uintzFovva, {from: accounts[3]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoinW243Wwt = await EdenCoin.new({from: accounts[4]});
		const addressG6NPvvD = accounts[1]
		const uintggx4Jy5 = BigInt("602")
		const addressvmFtCsX = "0x0000000000000000000000000000000000000001"
		const uintqO6CjlF = BigInt("768")
		const addressEQxgZ7N = accounts[2]
		const uinttf27WgN = BigInt("0")
		const addressSplHVDi = accounts[0]
		const uintwaftyS8 = BigInt("1609")
		const addresslaisXZL = accounts[3]
		const addresswCN52rg = accounts[0]
		const uintLhvgqUP = BigInt("1431")
		const addresstf1T1Lr = accounts[3]
		const addressbgtu6WV = accounts[4]
		const uintHdemzqk = BigInt("723")
		const addresswdKfLLI = accounts[2]
		const uint256e1kEkf = await EdenCoinW243Wwt.balanceOf.call(addressG6NPvvD, {from: accounts[1]});
		const boolXNnPnJ1 = await EdenCoinW243Wwt.transfer.call(addressvmFtCsX, uintggx4Jy5, {from: accounts[4]});
		const booliveHsy = await EdenCoinW243Wwt.increaseApproval.call(addressEQxgZ7N, uintqO6CjlF, {from: accounts[1]});
		const boolTGh76k8 = await EdenCoinW243Wwt.decreaseApproval.call(addressSplHVDi, uinttf27WgN, {from: accounts[3]});
//		const boolfuhkmNT = await EdenCoinW243Wwt.transferFrom.call(addresswCN52rg, addresslaisXZL, uintwaftyS8, {from: accounts[3]});
//		const boolqrCsgSx = await EdenCoinW243Wwt.increaseApproval.call(addresstf1T1Lr, uintLhvgqUP, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256aZtpRRm = await EdenCoinW243Wwt.balanceOf.call(addressbgtu6WV, {from: accounts[1]});
//		const boolOdM1GYq = await EdenCoinW243Wwt.decreaseApproval.call(addresswdKfLLI, uintHdemzqk, {from: accounts[2]});

		assert.equal(boolTGh76k8, true)
		assert.equal(boolXNnPnJ1, true)
		assert.equal(booliveHsy, true)
		assert.equal(uint256e1kEkf, BigInt("0"))
		await expect(EdenCoinW243Wwt.transferFrom.call(addresswCN52rg, addresslaisXZL, uintwaftyS8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})