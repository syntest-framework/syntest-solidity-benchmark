const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinT4loq82 = await EdenCoin.new({from: accounts[4]});
		const uintNmn47BS = BigInt("186")
		const addressb1HMDsp = accounts[4]
		const uintyXWwZAU = BigInt("565")
		const addressx3di52 = accounts[1]
		const uintRTccGwH = BigInt("144")
		const addressdcTvB7G = accounts[4]
		const uintL88mOZw = BigInt("96")
		const addressyfYtLd = accounts[3]
		const addressQLGgoEA = accounts[1]
		const uintMeoCCaz = BigInt("1205")
		const addressOJvRhCe = accounts[3]
		const boolgbgRS6V = await EdenCoinT4loq82.increaseApproval.call(addressb1HMDsp, uintNmn47BS, {from: accounts[2]});
//		const boolVgpqQvY = await EdenCoinT4loq82.transfer.call(addressx3di52, uintyXWwZAU, {from: accounts[1]});
//		const boolSPsL9Xy = await EdenCoinT4loq82.transfer.call(addressdcTvB7G, uintRTccGwH, {from: accounts[4]});
//		const boolLdi8KF = await EdenCoinT4loq82.transferFrom.call(addressQLGgoEA, addressyfYtLd, uintL88mOZw, {from: accounts[1]});
//		const boolbmQa78J = await EdenCoinT4loq82.approve.call(addressOJvRhCe, uintMeoCCaz, {from: accounts[4]});

		assert.equal(boolgbgRS6V, true)
		await expect(EdenCoinT4loq82.transfer.call(addressx3di52, uintyXWwZAU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinDmqx8vc = await EdenCoin.new({from: accounts[3]});
		const uintjIKne2J = BigInt("1188")
		const addresshWr2Ln2 = accounts[4]
		const uintUcvo9Wk = BigInt("1139")
		const addressY8LY8zV = accounts[1]
		const uintGLzUTMM = BigInt("1465")
		const addressZ6AywQl = accounts[2]
		const boolq3xXrVN = await EdenCoinDmqx8vc.approve.call(addresshWr2Ln2, uintjIKne2J, {from: accounts[4]});
		const boolfvyELZ9 = await EdenCoinDmqx8vc.increaseApproval.call(addressY8LY8zV, uintUcvo9Wk, {from: accounts[1]});
		const booltdnFnDF = await EdenCoinDmqx8vc.decreaseApproval.call(addressZ6AywQl, uintGLzUTMM, {from: accounts[4]});

		assert.equal(boolfvyELZ9, true)
		assert.equal(boolq3xXrVN, true)
		assert.equal(booltdnFnDF, true)
	});

	it('test for EdenCoin', async () => {
		const EdenCoinB9Plogh = await EdenCoin.new({from: accounts[0]});
		const addresspO55PT = accounts[4]
		const addressSGg4DNK = "0x0000000000000000000000000000000000000001"
		const uintIw87lg = BigInt("2036")
		const addresstKHTDN = accounts[3]
		const uintXpb69Ce = BigInt("146")
		const addressS2EYFdy = "0x0000000000000000000000000000000000000001"
		const addressMOLrelz = accounts[1]
		const addressrCV9yXd = accounts[1]
		const addresshc9ogv = "0x0000000000000000000000000000000000000001"
		const uintXtitF70 = BigInt("359")
		const addressoTGmMix = accounts[4]
		const uint256hd3JMVA = await EdenCoinB9Plogh.allowance.call(addressSGg4DNK, addresspO55PT, {from: accounts[3]});
		const boolhSCYadp = await EdenCoinB9Plogh.increaseApproval.call(addresstKHTDN, uintIw87lg, {from: accounts[5]});
		const boolAhrRb2d = await EdenCoinB9Plogh.increaseApproval.call(addressS2EYFdy, uintXpb69Ce, {from: accounts[4]});
		const uint256IgSLrzy = await EdenCoinB9Plogh.balanceOf.call(addressMOLrelz, {from: accounts[0]});
		const uint256F2gB6WP = await EdenCoinB9Plogh.allowance.call(addresshc9ogv, addressrCV9yXd, {from: accounts[2]});
		const boolnM3XXJc = await EdenCoinB9Plogh.increaseApproval.call(addressoTGmMix, uintXtitF70, {from: accounts[5]});

		assert.equal(boolAhrRb2d, true)
		assert.equal(boolhSCYadp, true)
		assert.equal(boolnM3XXJc, true)
		assert.equal(uint256F2gB6WP, BigInt("0"))
		assert.equal(uint256IgSLrzy, BigInt("0"))
		assert.equal(uint256hd3JMVA, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinHyqj50W = await EdenCoin.new({from: accounts[3]});
		const addressGRnFE2j = "0x0000000000000000000000000000000000000001"
		const uinttU9pgzb = BigInt("1723")
		const addresszJrpLB = accounts[3]
		const addressZVRRFNE = accounts[2]
		const uinthKdycDO = BigInt("294")
		const addressvV9vszm = accounts[2]
		const uintRmhI7zO = BigInt("1134")
		const addressHvurnG = accounts[1]
		const addressnaz7nUP = accounts[2]
		const uint256wRjNZ08 = await EdenCoinHyqj50W.balanceOf.call(addressGRnFE2j, {from: accounts[4]});
		const boolEBnOjQl = await EdenCoinHyqj50W.decreaseApproval.call(addresszJrpLB, uinttU9pgzb, {from: "0x0000000000000000000000000000000000000001"});
		const uint256VHCwGoT = await EdenCoinHyqj50W.balanceOf.call(addressZVRRFNE, {from: accounts[1]});
		const bool23AD2r = await EdenCoinHyqj50W.transfer.call(addressvV9vszm, uinthKdycDO, {from: accounts[3]});
//		const boolXPRvzf = await EdenCoinHyqj50W.transferFrom.call(addressnaz7nUP, addressHvurnG, uintRmhI7zO, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(bool23AD2r, true)
		assert.equal(boolEBnOjQl, true)
		assert.equal(uint256VHCwGoT, BigInt("0"))
		assert.equal(uint256wRjNZ08, BigInt("0"))
		await expect(EdenCoinHyqj50W.transferFrom.call(addressnaz7nUP, addressHvurnG, uintRmhI7zO, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoin04Isrv = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintR5JlanF = BigInt("1054")
		const addressYIDKqLJ = accounts[0]
		const addressZhjnFpl = accounts[0]
		const addressB4L43dG = accounts[0]
		const boolYgNiEzh = await EdenCoin04Isrv.transfer.call(addressYIDKqLJ, uintR5JlanF, {from: "0x0000000000000000000000000000000000000001"});
		const uint256P2dvNUS = await EdenCoin04Isrv.allowance.call(addressB4L43dG, addressZhjnFpl, {from: accounts[2]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoinjIjKMl = await EdenCoin.new({from: accounts[3]});
		const uintK0kjyBR = BigInt("479")
		const addressqi1n0qU = accounts[2]
		const uintrqsfhsX = BigInt("0")
		const address9n4RFu = accounts[3]
		const addressgxogUVD = accounts[3]
		const addressdQJ3p5h = "0x0000000000000000000000000000000000000001"
		const addressYuRb0wp = accounts[3]
		const uintBo5xPUM = BigInt("1461")
		const addressLdf8gZ = accounts[1]
		const booldqiBZq6 = await EdenCoinjIjKMl.approve.call(addressqi1n0qU, uintK0kjyBR, {from: accounts[1]});
		const boolu8Agl3K = await EdenCoinjIjKMl.decreaseApproval.call(address9n4RFu, uintrqsfhsX, {from: "0x0000000000000000000000000000000000000001"});
		const uint256jijrpzQ = await EdenCoinjIjKMl.allowance.call(addressdQJ3p5h, addressgxogUVD, {from: accounts[1]});
		const uint256x0pgS4u = await EdenCoinjIjKMl.balanceOf.call(addressYuRb0wp, {from: accounts[4]});
		const boolDm5h55v = await EdenCoinjIjKMl.approve.call(addressLdf8gZ, uintBo5xPUM, {from: accounts[5]});

		assert.equal(boolDm5h55v, true)
		assert.equal(booldqiBZq6, true)
		assert.equal(boolu8Agl3K, true)
		assert.equal(uint256jijrpzQ, BigInt("0"))
		assert.equal(uint256x0pgS4u, BigInt("1000000000000000000000000000"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinHyqj50W = await EdenCoin.new({from: accounts[3]});
		const addressRgEadfT = "0x00000000000000000000000000000000000000-1"
		const uintfTUvR4 = BigInt("1246")
		const addressWvJa76d = accounts[0]
		const uintX2chWnX = BigInt("1476")
		const addressWLHSgS = accounts[0]
		const uintdWGzV7F = BigInt("1823")
		const addressfDBskdj = "0x0000000000000000000000000000000000000001"
		const addressiaIXn9D = accounts[0]
		const uintxHOAOMI = BigInt("1723")
		const addressT4JBpMO = accounts[3]
		const uintgUFLtbr = BigInt("294")
		const addressgIJMO2I = accounts[2]
		const uintDH7q43 = BigInt("1275")
		const addressmJT166F = accounts[1]
		const uintSrtiWzd = BigInt("804")
		const addressHnSMGMb = accounts[2]
		const uintKfXakuG = BigInt("1021")
		const addressQbHhnS = accounts[4]
		const addressoYB2ufD = accounts[5]
		const addressNkJl3uS = accounts[1]
		const uintknSpFqr = BigInt("852")
		const addresshgWxCdI = accounts[4]
		const addressUIFSfQ8 = accounts[3]
//		const uint256wRjNZ08 = await EdenCoinHyqj50W.balanceOf.call(addressRgEadfT, {from: accounts[4]});
//		const boolF4cxLlS = await EdenCoinHyqj50W.approve.call(addressWvJa76d, uintfTUvR4, {from: accounts[4]});
//		const boolxZhhL6c = await EdenCoinHyqj50W.approve.call(addressWLHSgS, uintX2chWnX, {from: accounts[0]});
//		const boolWRTwAg0 = await EdenCoinHyqj50W.transferFrom.call(addressiaIXn9D, addressfDBskdj, uintdWGzV7F, {from: accounts[2]});
//		const boolEBnOjQl = await EdenCoinHyqj50W.decreaseApproval.call(addressT4JBpMO, uintxHOAOMI, {from: "0x0000000000000000000000000000000000000001"});
//		const bool23AD2r = await EdenCoinHyqj50W.transfer.call(addressgIJMO2I, uintgUFLtbr, {from: accounts[3]});
//		const boolsH4YHln = await EdenCoinHyqj50W.decreaseApproval.call(addressmJT166F, uintDH7q43, {from: accounts[2]});
//		const boolXTpY4rc = await EdenCoinHyqj50W.approve.call(addressHnSMGMb, uintSrtiWzd, {from: accounts[3]});
//		const boolAvrDk5 = await EdenCoinHyqj50W.decreaseApproval.call(addressQbHhnS, uintKfXakuG, {from: accounts[1]});
//		const uint256kzFkdtO = await EdenCoinHyqj50W.allowance.call(addressNkJl3uS, addressoYB2ufD, {from: accounts[2]});
//		const boolQNGJ0w0 = await EdenCoinHyqj50W.transferFrom.call(addressUIFSfQ8, addresshgWxCdI, uintknSpFqr, {from: accounts[2]});

		await expect(EdenCoinHyqj50W.balanceOf.call(addressRgEadfT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinoKqiKLL = await EdenCoin.new({from: accounts[4]});
		const uintE7YoNnF = BigInt("1548")
		const addressX4AUTNZ = accounts[1]
		const uinttswDlEZ = BigInt("1609")
		const addressVvcc5Pe = accounts[0]
		const addressz0RymBF = accounts[4]
		const boolErqqQqj = await EdenCoinoKqiKLL.approve.call(addressX4AUTNZ, uintE7YoNnF, {from: accounts[1]});
//		const booltODmHuQ = await EdenCoinoKqiKLL.transferFrom.call(addressz0RymBF, addressVvcc5Pe, uinttswDlEZ, {from: accounts[2]});

		assert.equal(boolErqqQqj, true)
		await expect(EdenCoinoKqiKLL.transferFrom.call(addressz0RymBF, addressVvcc5Pe, uinttswDlEZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})