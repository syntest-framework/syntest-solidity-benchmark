const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressg2ZII00 = accounts[1]
		const addressrzbz5R = accounts[2]
		const SpiritCoinw4JuYlN = await SpiritCoin.new(addressg2ZII00, addressrzbz5R, {from: "0x0000000000000000000000000000000000000001"});
		const addressq4EKSHL = accounts[4]
		const addressijpBcrN = accounts[3]
		const uintLOPwxF3 = BigInt("1314")
		const addressnB3R1C = accounts[1]
		const address0WYDmT = accounts[0]
		const uintifdIOq = await SpiritCoinw4JuYlN.allowance.call(addressijpBcrN, addressq4EKSHL, {from: accounts[1]});
		const boolsega7K = await SpiritCoinw4JuYlN.transferFrom.call(address0WYDmT, addressnB3R1C, uintLOPwxF3, {from: accounts[1]});
	});

	it('test for SpiritCoin', async () => {
		const addressHrAc3m5 = "0x0000000000000000000000000000000000000001"
		const addressjGRILPW = accounts[0]
		const SpiritCoinn3q64E = await SpiritCoin.new(addressHrAc3m5, addressjGRILPW, {from: accounts[1]});
		const uintmQdx0o6 = BigInt("911")
		const addresstSpkwSK = accounts[1]
		const uintDMiUeIJ = BigInt("1097")
		const addressQ3fIQTV = accounts[2]
		const uintW86CEAJ = BigInt("1269")
		const addresslH50ryK = accounts[3]
		const addressUABitAz = accounts[2]
		const uintpMOzQbU = BigInt("336")
		const addressvZjCcEX = accounts[3]
		const boolc1GNfPH = await SpiritCoinn3q64E.approve.call(addresstSpkwSK, uintmQdx0o6, {from: accounts[4]});
		const boolVqJJT5D = await SpiritCoinn3q64E.transfer.call(addressQ3fIQTV, uintDMiUeIJ, {from: "0x0000000000000000000000000000000000000001"});
		const boolwP7YRw2 = await SpiritCoinn3q64E.transferFrom.call(addressUABitAz, addresslH50ryK, uintW86CEAJ, {from: "0x0000000000000000000000000000000000000001"});
		const booltBtJQwP = await SpiritCoinn3q64E.approve.call(addressvZjCcEX, uintpMOzQbU, {from: accounts[1]});

		assert.equal(boolVqJJT5D, true)
		assert.equal(boolc1GNfPH, true)
		await expect(SpiritCoinn3q64E.transferFrom.call(addressUABitAz, addresslH50ryK, uintW86CEAJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressvxzaFIt = accounts[1]
		const addressvV69HZO = accounts[1]
		const SpiritCoinaiCEEob = await SpiritCoin.new(addressvxzaFIt, addressvV69HZO, {from: accounts[0]});
		const addressLjFe8jl = "0x0000000000000000000000000000000000000001"
		const addressPiOnRUS = accounts[0]
		const addresshYRowv9 = accounts[2]
		const address2vHe0C = accounts[4]
		const uintHlR0Fko = await SpiritCoinaiCEEob.allowance.call(addressPiOnRUS, addressLjFe8jl, {from: accounts[1]});
		const uintB3431TE = await SpiritCoinaiCEEob.allowance.call(address2vHe0C, addresshYRowv9, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintB3431TE, BigInt("0"))
		assert.equal(uintHlR0Fko, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addressm1FH433 = "0x0000000000000000000000000000000000000001"
		const addressW385FDx = accounts[5]
		const SpiritCoiniV30taY = await SpiritCoin.new(addressm1FH433, addressW385FDx, {from: accounts[1]});
		const uintVbiYWmE = BigInt("187")
		const addresssDsn9Id = accounts[4]
		const uintxndlynT = BigInt("467")
		const addressTKbHX2Q = accounts[2]
		const addressu8gC4Gn = accounts[0]
		const addressuH1q1Vc = accounts[3]
		const addressSeePD4w = accounts[3]
		const boolsUPLAQd = await SpiritCoiniV30taY.approve.call(addresssDsn9Id, uintVbiYWmE, {from: accounts[0]});
		const boolzJGs6g9 = await SpiritCoiniV30taY.transfer.call(addressTKbHX2Q, uintxndlynT, {from: "0x0000000000000000000000000000000000000001"});
		const addressqJ5AkP = await SpiritCoiniV30taY.setMinter.call(addressu8gC4Gn, {from: accounts[3]});
		const uintKJ5D8iX = await SpiritCoiniV30taY.allowance.call(addressSeePD4w, addressuH1q1Vc, {from: accounts[1]});

		assert.equal(boolsUPLAQd, true)
		assert.equal(boolzJGs6g9, true)
		await expect(SpiritCoiniV30taY.setMinter.call(addressu8gC4Gn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressjtteKoV = accounts[1]
		const addressxszGgmi = accounts[2]
		const SpiritCointA0fXFF = await SpiritCoin.new(addressjtteKoV, addressxszGgmi, {from: accounts[2]});
		const addressAcbk6OT = accounts[0]
		const uintvIlO3se = BigInt("663")
		const addressQeJKnt = accounts[4]
		const uintHnee2BB = BigInt("1143")
		const addressynPZdWK = accounts[0]
		const uintMPAc0XX = BigInt("1435")
		const addressPyxQD2k = accounts[0]
		const uintvG6Md2w = await SpiritCointA0fXFF.balanceOf.call(addressAcbk6OT, {from: accounts[4]});
		const boolRI8UQXY = await SpiritCointA0fXFF.approve.call(addressQeJKnt, uintvIlO3se, {from: accounts[1]});
		const addressnFIw6uj = await SpiritCointA0fXFF.mint.call(addressynPZdWK, uintHnee2BB, {from: accounts[0]});
		const addressbaXRAc = await SpiritCointA0fXFF.mint.call(addressPyxQD2k, uintMPAc0XX, {from: accounts[0]});

		assert.equal(boolRI8UQXY, true)
		assert.equal(uintvG6Md2w, BigInt("0"))
		await expect(SpiritCointA0fXFF.mint.call(addressynPZdWK, uintHnee2BB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressFZur6FL = accounts[2]
		const address1hufQZ = accounts[4]
		const SpiritCoinLecqPBM = await SpiritCoin.new(addressFZur6FL, address1hufQZ, {from: accounts[2]});
		const uintimWnaMY = BigInt("1205")
		const addresshIzWyH4 = accounts[2]
		const addressBaXKgZT = accounts[1]
		const uintZ0yLa2y = BigInt("1511")
		const addressBtQiixN = accounts[3]
		const uintHRVaZSG = BigInt("313")
		const addressokHAWc = accounts[0]
		const boolAq6uzxb = await SpiritCoinLecqPBM.approve.call(addresshIzWyH4, uintimWnaMY, {from: accounts[4]});
		const uintTVWHazb = await SpiritCoinLecqPBM.balanceOf.call(addressBaXKgZT, {from: accounts[3]});
		const boolixZxxyw = await SpiritCoinLecqPBM.transfer.call(addressBtQiixN, uintZ0yLa2y, {from: accounts[1]});
		const boolQaufuiR = await SpiritCoinLecqPBM.approve.call(addressokHAWc, uintHRVaZSG, {from: accounts[4]});

		assert.equal(boolAq6uzxb, true)
		assert.equal(uintTVWHazb, BigInt("0"))
		await expect(SpiritCoinLecqPBM.transfer.call(addressBtQiixN, uintZ0yLa2y, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressY36190u = accounts[3]
		const addressrOB9s86 = accounts[2]
		const SpiritCoinGRZFh3y = await SpiritCoin.new(addressY36190u, addressrOB9s86, {from: accounts[3]});
		const uintk3k8Bnh = BigInt("1420")
		const addressPwmNopi = accounts[1]
		const uintDmMGcHd = BigInt("1749")
		const addressG2psfdk = accounts[1]
		const addressSboCWBY = accounts[0]
		const uintespI6x3 = BigInt("1184")
		const addressxa0GPj = accounts[1]
		const addressHUj98y = accounts[2]
		const addressvQPxJ73 = accounts[3]
		const addressCb8X4zf = accounts[0]
		const addressVk0ZBXC = accounts[1]
		const uintjfF77L = BigInt("1213")
		const addressrm4r5XM = accounts[0]
		const addressh1sTsvV = await SpiritCoinGRZFh3y.mint.call(addressPwmNopi, uintk3k8Bnh, {from: accounts[2]});
		const boolQKp2hJ = await SpiritCoinGRZFh3y.transferFrom.call(addressSboCWBY, addressG2psfdk, uintDmMGcHd, {from: accounts[2]});
		const addressjeR4PW = await SpiritCoinGRZFh3y.mint.call(addressxa0GPj, uintespI6x3, {from: accounts[4]});
		const uinti06CYDj = await SpiritCoinGRZFh3y.allowance.call(addressvQPxJ73, addressHUj98y, {from: accounts[0]});
		const uintzesASyz = await SpiritCoinGRZFh3y.allowance.call(addressVk0ZBXC, addressCb8X4zf, {from: accounts[2]});
		const boolLeYEVwD = await SpiritCoinGRZFh3y.transfer.call(addressrm4r5XM, uintjfF77L, {from: accounts[2]});

		await expect(SpiritCoinGRZFh3y.transferFrom.call(addressSboCWBY, addressG2psfdk, uintDmMGcHd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})