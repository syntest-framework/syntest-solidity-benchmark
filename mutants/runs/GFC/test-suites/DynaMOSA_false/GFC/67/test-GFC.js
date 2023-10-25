const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintXRWIuia = BigInt("2019")
		const stringP1HvVLy = "CSORDTJ5b7WcdgcjAjo4C"
		const stringbyqOOGL = "8LCSjNf"
		const GFCWoP4I2r = await GFC.new(uintXRWIuia, stringP1HvVLy, stringbyqOOGL, {from: accounts[2]});
		const uintiLiEKJZ = BigInt("1783")
		const uintjL5JmNt = BigInt("1691")
		const addressWMRUfCH = "0x0000000000000000000000000000000000000001"
		const addresssbyqgaR = accounts[0]
		const uintlPgkJV0 = BigInt("1667")
		const addressaDCPC9M = accounts[2]
		const uintJnDCkcH = BigInt("135")
		const addressr0xHJ4A = accounts[3]
		const uintCL2BUUr = BigInt("1589")
		const addressjdx3mAK = accounts[2]
		const uintAHiYFLA = BigInt("369")
		const addressmpwt4OR = accounts[3]
		const addressAmdpxUC = "0x0000000000000000000000000000000000000001"
		const boolTyk2pUL = await GFCWoP4I2r.burn.call(uintiLiEKJZ, {from: accounts[2]});
		const boolgyLEZTu = await GFCWoP4I2r.transferFrom.call(addresssbyqgaR, addressWMRUfCH, uintjL5JmNt, {from: accounts[5]});
		const boolwnacqgh = await GFCWoP4I2r.approve.call(addressaDCPC9M, uintlPgkJV0, {from: accounts[3]});
		const boolPqLNKF9 = await GFCWoP4I2r.approve.call(addressr0xHJ4A, uintJnDCkcH, {from: accounts[2]});
		const boolY0lJ3rM = await GFCWoP4I2r.burnFrom.call(addressjdx3mAK, uintCL2BUUr, {from: accounts[5]});
		const boolzwhPJTA = await GFCWoP4I2r.transferFrom.call(addressAmdpxUC, addressmpwt4OR, uintAHiYFLA, {from: accounts[3]});

		assert.equal(boolTyk2pUL, true)
		await expect(GFCWoP4I2r.transferFrom.call(addresssbyqgaR, addressWMRUfCH, uintjL5JmNt, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintKyHML2U = BigInt("1114")
		const stringQGawAnj = "Nn7"
		const stringaqVF9Z = "T2u9aE7KRavqBxXggJQFBjxBnyjSevaAv8BOV8rwUiKFvrnAoqA1RLhXK"
		const GFCIobGMjM = await GFC.new(uintKyHML2U, stringQGawAnj, stringaqVF9Z, {from: "0x0000000000000000000000000000000000000001"});
		const uintaP0UElG = BigInt("93")
		const addressIrFre2h = accounts[2]
		const uintNZxbtRQ = BigInt("607")
		const boolI7HO0KB = await GFCIobGMjM.burnFrom.call(addressIrFre2h, uintaP0UElG, {from: accounts[2]});
		const boolDYXW0ak = await GFCIobGMjM.burn.call(uintNZxbtRQ, {from: accounts[1]});
	});

	it('test for GFC', async () => {
		const uintVmHBGLZ = BigInt("626")
		const stringUBVVfg9 = "HTaGIOFaf0FJnEWX3A05ys9cenli7yJnf2ZSKnaYtb8n"
		const stringqe5yvl1 = "ggCUu8YExWSmhlAIdJeqslKooQO3avT5uZcpenHUASgwMmzwq"
		const GFCWSdLfXu = await GFC.new(uintVmHBGLZ, stringUBVVfg9, stringqe5yvl1, {from: accounts[5]});
		const uintbdzp9az = BigInt("1161")
		const addressDe9HdFD = accounts[4]
		const byteeLFq6G = "0x09170a031b1e0d0e0c121c1f161f07130a08001d040203061e111b16"
		const uintFBCg89l = BigInt("1301")
		const addressZtmC744 = accounts[4]
		const boolwDCAVEl = await GFCWSdLfXu.approve.call(addressDe9HdFD, uintbdzp9az, {from: accounts[2]});
		const boolCrLxmES = await GFCWSdLfXu.approveAndCall.call(addressZtmC744, uintFBCg89l, byteeLFq6G, {from: accounts[0]});

		assert.equal(boolwDCAVEl, true)
		await expect(GFCWSdLfXu.approveAndCall.call(addressZtmC744, uintFBCg89l, byteeLFq6G, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintaQX0T7N = BigInt("936")
		const stringvtkn748 = "wmnsdqsUmp3wfKZeBlf0hMeObORj9eHFckuFD9pODER9TAoOejswE0x7gdUB7YS3vtakSyQeaI6fCA3sVi7ssxncTKRWgEEMda"
		const stringU8ZuuvU = "hpuM3z2yNNEUNtrQQLkFjvWaw5vpdtIhr147MXA8rVbDgfGs1KYgKLw"
		const GFCUMxXKLa = await GFC.new(uintaQX0T7N, stringvtkn748, stringU8ZuuvU, {from: accounts[2]});
		const uintfU3Jjf = BigInt("372")
		const addresssAhMoBF = accounts[3]
		const uintlKyyDwe = BigInt("18")
		const addressNAdodRG = "0x0000000000000000000000000000000000000001"
		const uintou05zv6 = BigInt("167")
		const addressbAmpfHu = accounts[1]
		const addressBqwb2wi = accounts[1]
		const boollhTsz3x = await GFCUMxXKLa.burnFrom.call(addresssAhMoBF, uintfU3Jjf, {from: accounts[4]});
		const boolCRrqIR3 = await GFCUMxXKLa.transfer.call(addressNAdodRG, uintlKyyDwe, {from: accounts[1]});
		const boolaUm791h = await GFCUMxXKLa.transferFrom.call(addressBqwb2wi, addressbAmpfHu, uintou05zv6, {from: accounts[5]});

		await expect(GFCUMxXKLa.burnFrom.call(addresssAhMoBF, uintfU3Jjf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintH6oGDzT = BigInt("626")
		const stringUBVVfg9 = "HTaGIOFaf0FJnEWX3A05ys9cenli7yJnf2ZSKnaYtb8n"
		const stringqe5yvl1 = "ggCUu8YExWSmhlAIdJeqslKooQO3avT5uZcpenHUASgwMmzwq"
		const GFCWSdLfXu = await GFC.new(uintH6oGDzT, stringUBVVfg9, stringqe5yvl1, {from: accounts[5]});
		const uintURyrL5z = BigInt("1161")
		const addressT13eE3L = accounts[4]
		const uintCADuym = BigInt("1341")
		const addressxpL2gin = accounts[1]
		const bytenXlR8ya = "0x09170a031b1e0d0e0c121c1f161f07130a08001d040203061e111b16"
		const uint3iLNT3 = BigInt("1301")
		const address6vSydm = accounts[4]
		const boolwDCAVEl = await GFCWSdLfXu.approve.call(addressT13eE3L, uintURyrL5z, {from: accounts[2]});
		const boolPsoXmR7 = await GFCWSdLfXu.transfer.call(addressxpL2gin, uintCADuym, {from: accounts[4]});
		const boolCrLxmES = await GFCWSdLfXu.approveAndCall.call(address6vSydm, uint3iLNT3, bytenXlR8ya, {from: accounts[0]});

		assert.equal(boolwDCAVEl, true)
		await expect(GFCWSdLfXu.transfer.call(addressxpL2gin, uintCADuym, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})