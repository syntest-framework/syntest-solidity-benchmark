const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20YTFRZ4 = await GAZ_ERC20.new({from: accounts[4]});
		const uintcHFXIdI = BigInt("1003")
		const addressGVfOHzT = accounts[1]
		const addressOoBYPXE = accounts[1]
		const boolmm5WxqK = await GAZ_ERC20YTFRZ4.approve.call(addressGVfOHzT, uintcHFXIdI, {from: "0x0000000000000000000000000000000000000001"});
		const boolR59wrs3 = await GAZ_ERC20YTFRZ4.approve.call(addressOoBYPXE, {from: accounts[2]});

		assert.equal(boolmm5WxqK, true)
		await expect(GAZ_ERC20YTFRZ4.approve.call(addressOoBYPXE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Fay9Co = await GAZ_ERC20.new({from: accounts[3]});
		const uintF4UezdG = BigInt("367")
		const addressED7HQp9 = accounts[3]
		const uintJ9IM94A = BigInt("1941")
		const addressZf3xs8 = "0x0000000000000000000000000000000000000001"
		const addressrtgeAAH = accounts[3]
		const uintlKl4gTR = BigInt("1282")
		const addressz6VsLCu = accounts[5]
		const addresslXUVSD7 = accounts[3]
		const boolgNoSuXr = await GAZ_ERC20Fay9Co.transfer.call(addressED7HQp9, uintF4UezdG, {from: accounts[3]});
		const booleeb3TqN = await GAZ_ERC20Fay9Co.transferFrom.call(addressrtgeAAH, addressZf3xs8, uintJ9IM94A, {from: accounts[4]});
		const boolViH0QYZ = await GAZ_ERC20Fay9Co.transferFrom.call(addresslXUVSD7, addressz6VsLCu, uintlKl4gTR, {from: accounts[1]});

		assert.equal(boolgNoSuXr, true)
		await expect(GAZ_ERC20Fay9Co.transferFrom.call(addressrtgeAAH, addressZf3xs8, uintJ9IM94A, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20RGDAhgO = await GAZ_ERC20.new({from: accounts[3]});
		const uintMXolJ3f = BigInt("1372")
		const addressUzLrhvv = accounts[3]
		const uintTxDDKSO = BigInt("1955")
		const addressgxWAJhM = accounts[2]
		const uintC2BxX4y = BigInt("1406")
		const addressO0PadXt = accounts[4]
		const uintPcorZm4 = BigInt("1728")
		const addressh5CJeMx = "0x0000000000000000000000000000000000000001"
		const address5bAAhB = accounts[0]
		const boolPquAEV = await GAZ_ERC20RGDAhgO.approve.call(addressUzLrhvv, uintMXolJ3f, {from: accounts[0]});
		const boolPE1RGj = await GAZ_ERC20RGDAhgO.transfer.call(addressgxWAJhM, uintTxDDKSO, {from: accounts[2]});
		const boolrkJZ9b = await GAZ_ERC20RGDAhgO.approve.call(addressO0PadXt, uintC2BxX4y, {from: accounts[2]});
		const boolNRl4fl1 = await GAZ_ERC20RGDAhgO.approve.call(addressh5CJeMx, uintPcorZm4, {from: accounts[1]});
		const boolvNjLfyy = await GAZ_ERC20RGDAhgO.approve.call(address5bAAhB, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolPquAEV, true)
		await expect(GAZ_ERC20RGDAhgO.transfer.call(addressgxWAJhM, uintTxDDKSO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Ucbtas = await GAZ_ERC20.new({from: accounts[2]});
		const uintHZlUyDc = BigInt("494")
		const address2khhmw = accounts[0]
		const addresspSH1GYr = accounts[2]
		const uintuAWIBFc = BigInt("1741")
		const addressz2aP7nc = accounts[1]
		const addressv2NS3xd = accounts[5]
		const uintFLEDcSX = BigInt("1762")
		const addressyMqMEm3 = accounts[2]
		const uintOn22kkb = BigInt("1234")
		const addressMGN9aT4 = accounts[2]
		const boolBiPHpDj = await GAZ_ERC20Ucbtas.approve.call(address2khhmw, uintHZlUyDc, {from: accounts[1]});
		const boolMApv7vI = await GAZ_ERC20Ucbtas.approve.call(addresspSH1GYr, {from: accounts[0]});
		const boolf88IyOY = await GAZ_ERC20Ucbtas.transfer.call(addressz2aP7nc, uintuAWIBFc, {from: "0x0000000000000000000000000000000000000001"});
		const boolWtCKV85 = await GAZ_ERC20Ucbtas.approve.call(addressv2NS3xd, {from: accounts[1]});
		const boolmKn5Ab = await GAZ_ERC20Ucbtas.transfer.call(addressyMqMEm3, uintFLEDcSX, {from: accounts[4]});
		const boolBtFz3J = await GAZ_ERC20Ucbtas.transfer.call(addressMGN9aT4, uintOn22kkb, {from: accounts[3]});

		assert.equal(boolBiPHpDj, true)
		await expect(GAZ_ERC20Ucbtas.approve.call(addresspSH1GYr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Fay9Co = await GAZ_ERC20.new({from: accounts[3]});
		const addressT9QlX8w = accounts[0]
		const uintMclSEeO = BigInt("367")
		const addresssz1y8nL = accounts[4]
		const uinti0chG9k = BigInt("1941")
		const addressRAOMFWJ = "0x0000000000000000000000000000000000000001"
		const addressvEg7rsx = accounts[3]
		const uintoBRnuwX = BigInt("1282")
		const addressEMXjctz = accounts[5]
		const addressT5EPXSD = accounts[3]
		const boolgzukafC = await GAZ_ERC20Fay9Co.approve.call(addressT9QlX8w, {from: "0x0000000000000000000000000000000000000001"});
		const boolgNoSuXr = await GAZ_ERC20Fay9Co.transfer.call(addresssz1y8nL, uintMclSEeO, {from: accounts[3]});
		const booleeb3TqN = await GAZ_ERC20Fay9Co.transferFrom.call(addressvEg7rsx, addressRAOMFWJ, uinti0chG9k, {from: accounts[4]});
		const boolViH0QYZ = await GAZ_ERC20Fay9Co.transferFrom.call(addressT5EPXSD, addressEMXjctz, uintoBRnuwX, {from: accounts[1]});

		await expect(GAZ_ERC20Fay9Co.approve.call(addressT9QlX8w, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20YTFRZ4 = await GAZ_ERC20.new({from: accounts[4]});
		const uintmLnXPZo = BigInt("154")
		const addressLMYRKAF = accounts[1]
		const addressy6gAkUv = accounts[4]
		const addressZFPmzef = accounts[1]
		const uintu68i1Pe = BigInt("1854")
		const addressb2Ih8eu = accounts[3]
		const uintaAnzm2a = BigInt("830")
		const addressVMFlgb0 = accounts[5]
		const boolF77NEJ7 = await GAZ_ERC20YTFRZ4.approve.call(addressLMYRKAF, uintmLnXPZo, {from: accounts[0]});
		const booltG9Xwt8 = await GAZ_ERC20YTFRZ4.approve.call(addressy6gAkUv, {from: accounts[1]});
		const boolR59wrs3 = await GAZ_ERC20YTFRZ4.approve.call(addressZFPmzef, {from: accounts[2]});
		const boolXj1tlme = await GAZ_ERC20YTFRZ4.transfer.call(addressb2Ih8eu, uintu68i1Pe, {from: accounts[1]});
		const boolbNEtqKm = await GAZ_ERC20YTFRZ4.transfer.call(addressVMFlgb0, uintaAnzm2a, {from: accounts[2]});

		assert.equal(boolF77NEJ7, true)
		await expect(GAZ_ERC20YTFRZ4.approve.call(addressy6gAkUv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20YTFRZ4 = await GAZ_ERC20.new({from: accounts[4]});
		const addressax4kyAI = accounts[2]
		const addressgHpuu2b = accounts[2]
		const boolgQNNYES = await GAZ_ERC20YTFRZ4.approve.call(addressax4kyAI, {from: accounts[3]});
		const boolR59wrs3 = await GAZ_ERC20YTFRZ4.approve.call(addressgHpuu2b, {from: accounts[2]});

		await expect(GAZ_ERC20YTFRZ4.approve.call(addressax4kyAI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20YTFRZ4 = await GAZ_ERC20.new({from: accounts[4]});
		const uintAK65xr = BigInt("97")
		const addressTqqVGnm = accounts[2]
		const addresshqUiC2o = accounts[0]
		const addressbqPjLz = accounts[2]
		const boolAYcgd01 = await GAZ_ERC20YTFRZ4.approve.call(addressTqqVGnm, uintAK65xr, {from: accounts[5]});
		const boolVzZISBa = await GAZ_ERC20YTFRZ4.approve.call(addresshqUiC2o, {from: accounts[4]});
		const boolR59wrs3 = await GAZ_ERC20YTFRZ4.approve.call(addressbqPjLz, {from: accounts[2]});

		assert.equal(boolAYcgd01, true)
		await expect(GAZ_ERC20YTFRZ4.approve.call(addresshqUiC2o, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Fay9Co = await GAZ_ERC20.new({from: accounts[3]});
		const uintuKOZnnB = BigInt("2017")
		const addressA4Jl4vA = accounts[3]
		const addresspjRVOaS = accounts[3]
		const uintcaMXmbk = BigInt("1282")
		const addresszidMtq = accounts[5]
		const addressyHGL4KI = accounts[4]
		const boolqb9mSQw = await GAZ_ERC20Fay9Co.approve.call(addressA4Jl4vA, uintuKOZnnB, {from: accounts[4]});
		const boolcdDu67F = await GAZ_ERC20Fay9Co.approve.call(addresspjRVOaS, {from: accounts[5]});
		const boolViH0QYZ = await GAZ_ERC20Fay9Co.transferFrom.call(addressyHGL4KI, addresszidMtq, uintcaMXmbk, {from: accounts[1]});

		assert.equal(boolqb9mSQw, true)
		await expect(GAZ_ERC20Fay9Co.approve.call(addresspjRVOaS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20M0ej14Y = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintwOAE8q = BigInt("332")
		const addressb65fKmg = accounts[2]
		const uintMc3Iw6q = BigInt("796")
		const address69paMH = accounts[4]
		const uintqrPdWH9 = BigInt("415")
		const addressXGQ7pkG = accounts[4]
		const boolJ3Pwii = await GAZ_ERC20M0ej14Y.approve.call(addressb65fKmg, uintwOAE8q, {from: "0x0000000000000000000000000000000000000001"});
		const boolPkmET4e = await GAZ_ERC20M0ej14Y.transfer.call(address69paMH, uintMc3Iw6q, {from: "0x0000000000000000000000000000000000000001"});
		const boolk9ghkmd = await GAZ_ERC20M0ej14Y.transfer.call(addressXGQ7pkG, uintqrPdWH9, {from: accounts[0]});
	});
})