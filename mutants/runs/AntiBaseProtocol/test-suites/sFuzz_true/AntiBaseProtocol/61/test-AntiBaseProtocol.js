const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolVaKIuh7 = await AntiBaseProtocol.new({from: accounts[5]});
		const addressw6IYPD7 = accounts[3]
		const uintDh39x5x = BigInt("1775")
		const addressO3ZFoAo = accounts[4]
		const uintk3FrhYT = BigInt("1396")
		const addressRLTGuQg = accounts[2]
		const uint256X36P1T = await AntiBaseProtocolVaKIuh7.balanceOf.call(addressw6IYPD7, {from: accounts[3]});
		const addressILka9mB = await AntiBaseProtocolVaKIuh7._burn.call(addressO3ZFoAo, uintDh39x5x, {from: accounts[1]});
		const boolDJ1arTi = await AntiBaseProtocolVaKIuh7.approve.call(addressRLTGuQg, uintk3FrhYT, {from: accounts[0]});

		assert.equal(uint256X36P1T, BigInt("0"))
		await expect(AntiBaseProtocolVaKIuh7._burn.call(addressO3ZFoAo, uintDh39x5x, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolPNRFiQY = await AntiBaseProtocol.new({from: accounts[0]});
		const addressmjeiL3o = accounts[5]
		const addressJcIckjA = accounts[0]
		const addresstaXHL1 = accounts[0]
		const uintr1p0nRu = BigInt("932")
		const uint256qffR09l = await AntiBaseProtocolPNRFiQY.allowance.call(addressJcIckjA, addressmjeiL3o, {from: accounts[5]});
		const addressz0GyeSg = await AntiBaseProtocolPNRFiQY.transferOwnership.call(addresstaXHL1, {from: accounts[0]});
		const string74fsAA = await AntiBaseProtocolPNRFiQY.symbol.call({from: accounts[1]});
		const uint256jmlhqv0 = await AntiBaseProtocolPNRFiQY.burn.call(uintr1p0nRu, {from: accounts[0]});

		assert.equal(string74fsAA, "ABASE")
		assert.equal(uint256qffR09l, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolFnoKzq = await AntiBaseProtocol.new({from: accounts[2]});
		const uintphNw5BI = BigInt("1828")
		const uintIQjyPD7 = BigInt("690")
		const addressMfd7j87 = accounts[2]
		const uint256KrjL77k = await AntiBaseProtocolFnoKzq.burn.call(uintphNw5BI, {from: accounts[0]});
		const addressnTznM9Z = await AntiBaseProtocolFnoKzq.owner.call({from: accounts[4]});
		const addressb8mPi30 = await AntiBaseProtocolFnoKzq._burn.call(addressMfd7j87, uintIQjyPD7, {from: accounts[2]});

		await expect(AntiBaseProtocolFnoKzq.burn.call(uintphNw5BI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolC5sHoh8 = await AntiBaseProtocol.new({from: accounts[1]});
		const uintfgzbIcc = BigInt("1222")
		const addressRYAVMae = accounts[3]
		const uintwRFQhSe = BigInt("52")
		const addressw51TSjk = accounts[3]
		const uintlMRbbMV = BigInt("1771")
		const addresse26GIoU = accounts[2]
		const boolzWVCIH = await AntiBaseProtocolC5sHoh8.transfer.call(addressRYAVMae, uintfgzbIcc, {from: accounts[2]});
		const stringuxXDgYP = await AntiBaseProtocolC5sHoh8.symbol.call({from: accounts[4]});
		const addressr7Dn6Op = await AntiBaseProtocolC5sHoh8._burnFrom.call(addressw51TSjk, uintwRFQhSe, {from: accounts[4]});
		const boolBN242pM = await AntiBaseProtocolC5sHoh8.approve.call(addresse26GIoU, uintlMRbbMV, {from: accounts[5]});

		await expect(AntiBaseProtocolC5sHoh8.transfer.call(addressRYAVMae, uintfgzbIcc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolD2kM1Gv = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const uintDr5XRvY = BigInt("1949")
		const addressKB57TL1 = accounts[1]
		const addressypm6jYT = accounts[4]
		const addressv33CD0 = accounts[4]
		const addressLfjfKtp = accounts[2]
		const boolvz7Oy2H = await AntiBaseProtocolD2kM1Gv.decreaseAllowance.call(addressKB57TL1, uintDr5XRvY, {from: accounts[5]});
		const addressHDcFqUx = await AntiBaseProtocolD2kM1Gv.transferOwnership.call(addressypm6jYT, {from: accounts[1]});
		const addressSVpgNO7 = await AntiBaseProtocolD2kM1Gv._transferOwnership.call(addressv33CD0, {from: accounts[4]});
		const addressDt9qEpm = await AntiBaseProtocolD2kM1Gv._transferOwnership.call(addressLfjfKtp, {from: accounts[0]});
	});

	it('test for AntiBaseProtocol', async () => {
		const stringV7VDJqV = "LPQudATJCfGRLlIqElYJcNf4uZi7HiX3TUZQMy0x5bK15pcSmQQLLErIy"
		const stringLMKtFqG = "OvU2WOqwtNXVGvjZEkDRWsygA4JUDdXYiwaEEaSeht89kvTXmduJ4RE37uUMbZfYFRZ6auQ6GzQnIXyFbtTxAdXd"
		const uintOUzrKrn = BigInt("153")
		const AntiBaseProtocolAPoutQ2 = await AntiBaseProtocol.new(stringV7VDJqV, stringLMKtFqG, uintOUzrKrn, {from: accounts[1]});
		const uint87JH2H = BigInt("1863")
		const addressydc9WWb = "0x0000000000000000000000000000000000000001"
		const uintZasDsZm = BigInt("370")
		const addresstq8IxMo = accounts[3]
		const addressTjOuUux = accounts[3]
		const boolHCYPfbU = await AntiBaseProtocolAPoutQ2.approve.call(addressydc9WWb, uint87JH2H, {from: accounts[4]});
		await AntiBaseProtocolAPoutQ2.renounceOwnership.call({from: accounts[2]});
		const booltY2CQ9 = await AntiBaseProtocolAPoutQ2.transferFrom.call(addressTjOuUux, addresstq8IxMo, uintZasDsZm, {from: accounts[4]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolcbaSVo4 = await AntiBaseProtocol.new({from: accounts[4]});
		const uintQMbqiRO = BigInt("1119")
		const addressuDPcUn = accounts[4]
		const uinti8zR2cT = BigInt("1523")
		const addressD9obqDG = accounts[3]
		const uintGAbdbmZ = BigInt("881")
		const addressDK76dvv = "0x0000000000000000000000000000000000000001"
		const uintr8K0Ni1 = BigInt("841")
		const addressEafm69B = accounts[2]
		const uint256QvtiDcT = await AntiBaseProtocolcbaSVo4.findBurnFee.call(uintQMbqiRO, {from: accounts[2]});
		const uint256wN3hXHr = await AntiBaseProtocolcbaSVo4.balanceOf.call(addressuDPcUn, {from: accounts[3]});
		const boolyp0LHfa = await AntiBaseProtocolcbaSVo4.increaseAllowance.call(addressD9obqDG, uinti8zR2cT, {from: accounts[2]});
		const boolFLiJi6Y = await AntiBaseProtocolcbaSVo4.decreaseAllowance.call(addressDK76dvv, uintGAbdbmZ, {from: accounts[2]});
		const boolBBOd84X = await AntiBaseProtocolcbaSVo4.decreaseAllowance.call(addressEafm69B, uintr8K0Ni1, {from: accounts[1]});

		assert.equal(boolyp0LHfa, true)
		assert.equal(uint256QvtiDcT, BigInt("180"))
		assert.equal(uint256wN3hXHr, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolcbaSVo4.decreaseAllowance.call(addressDK76dvv, uintGAbdbmZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolcbaSVo4 = await AntiBaseProtocol.new({from: accounts[4]});
		const uintYV1UbKx = BigInt("1075")
		const uintFsQkQKy = BigInt("1523")
		const addressL9SBOh = accounts[3]
		const uintRLu672 = BigInt("277")
		const addressL8eO19L = accounts[4]
		const uintE8POZc = BigInt("881")
		const addressz3fVHje = "0x0000000000000000000000000000000000000001"
		const uintjPdP9u = BigInt("841")
		const addresshiDxSIA = accounts[2]
		const addressUbMIycq = await AntiBaseProtocolcbaSVo4.owner.call({from: accounts[1]});
		const uint256QvtiDcT = await AntiBaseProtocolcbaSVo4.findBurnFee.call(uintYV1UbKx, {from: accounts[2]});
		const boolyp0LHfa = await AntiBaseProtocolcbaSVo4.increaseAllowance.call(addressL9SBOh, uintFsQkQKy, {from: accounts[2]});
		const addressrI1as2y = await AntiBaseProtocolcbaSVo4.burnFrom.call(addressL8eO19L, uintRLu672, {from: accounts[0]});
		const boolFLiJi6Y = await AntiBaseProtocolcbaSVo4.decreaseAllowance.call(addressz3fVHje, uintE8POZc, {from: accounts[2]});
		const boolBBOd84X = await AntiBaseProtocolcbaSVo4.decreaseAllowance.call(addresshiDxSIA, uintjPdP9u, {from: accounts[1]});

		assert.equal(addressUbMIycq, 0x5354580838b982664c8ce621002394752ea37fff)
		assert.equal(boolyp0LHfa, true)
		assert.equal(uint256QvtiDcT, BigInt("165"))
		await expect(AntiBaseProtocolcbaSVo4.burnFrom.call(addressL8eO19L, uintRLu672, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolcbaSVo4 = await AntiBaseProtocol.new({from: accounts[4]});
		const uintyRuPyPC = BigInt("1119")
		const uintnRtCXG6 = BigInt("1026")
		const addressQN1dT3d = accounts[2]
		const addressO8hXIlm = accounts[4]
		const addressZE25ILt = accounts[5]
		const uintUCaQPya = BigInt("1523")
		const addresspk8DUj0 = accounts[3]
		const uintY0Tsq2Y = BigInt("881")
		const addresseAf2oMP = "0x0000000000000000000000000000000000000001"
		const uintvO29MP6 = BigInt("841")
		const addressKjpJCY6 = accounts[2]
		const uint256QvtiDcT = await AntiBaseProtocolcbaSVo4.findBurnFee.call(uintyRuPyPC, {from: accounts[2]});
		const boolMLgm9Ly = await AntiBaseProtocolcbaSVo4.transferFrom.call(addressO8hXIlm, addressQN1dT3d, uintnRtCXG6, {from: accounts[1]});
		const uint256wN3hXHr = await AntiBaseProtocolcbaSVo4.balanceOf.call(addressZE25ILt, {from: accounts[3]});
		const boolyp0LHfa = await AntiBaseProtocolcbaSVo4.increaseAllowance.call(addresspk8DUj0, uintUCaQPya, {from: accounts[2]});
		const boolFLiJi6Y = await AntiBaseProtocolcbaSVo4.decreaseAllowance.call(addresseAf2oMP, uintY0Tsq2Y, {from: accounts[2]});
		const boolBBOd84X = await AntiBaseProtocolcbaSVo4.decreaseAllowance.call(addressKjpJCY6, uintvO29MP6, {from: accounts[1]});

		assert.equal(uint256QvtiDcT, BigInt("180"))
		await expect(AntiBaseProtocolcbaSVo4.transferFrom.call(addressO8hXIlm, addressQN1dT3d, uintnRtCXG6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolVaKIuh7 = await AntiBaseProtocol.new({from: accounts[5]});
		const addressKwP9ul1 = accounts[3]
		const addressWyFpNIp = accounts[4]
		const uintYHp8DtC = BigInt("1947")
		const addressKvXi8NZ = accounts[1]
		const uintmCuaZa6 = BigInt("1775")
		const addresssJxAD8q = accounts[4]
		const uintQYoyd1 = BigInt("1396")
		const addressjtkUbeB = accounts[2]
		const uint256X36P1T = await AntiBaseProtocolVaKIuh7.balanceOf.call(addressKwP9ul1, {from: accounts[3]});
		const addressKPyZmXy = await AntiBaseProtocolVaKIuh7.transferOwnership.call(addressWyFpNIp, {from: accounts[0]});
		const boolWATihMx = await AntiBaseProtocolVaKIuh7.increaseAllowance.call(addressKvXi8NZ, uintYHp8DtC, {from: accounts[3]});
		const addressILka9mB = await AntiBaseProtocolVaKIuh7._burn.call(addresssJxAD8q, uintmCuaZa6, {from: accounts[1]});
		const boolDJ1arTi = await AntiBaseProtocolVaKIuh7.approve.call(addressjtkUbeB, uintQYoyd1, {from: accounts[0]});

		assert.equal(uint256X36P1T, BigInt("0"))
		await expect(AntiBaseProtocolVaKIuh7.transferOwnership.call(addressWyFpNIp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoluBttjdU = await AntiBaseProtocol.new({from: accounts[4]});
		const uinteBwjUlb = BigInt("1754")
		const addressgONPaBs = accounts[4]
		const uint8BEwLkRU = await AntiBaseProtocoluBttjdU.decimals.call({from: accounts[5]});
		const stringyyh3iT = await AntiBaseProtocoluBttjdU.name.call({from: accounts[5]});
		const addressmA89k9X = await AntiBaseProtocoluBttjdU._mint.call(addressgONPaBs, uinteBwjUlb, {from: accounts[5]});
		const boolk9yfcL4 = await AntiBaseProtocoluBttjdU.isOwner.call({from: accounts[3]});
		await AntiBaseProtocoluBttjdU.onlyOwner.call({from: accounts[2]});

		assert.equal(stringyyh3iT, "https://t.me/antibaseprotocol")
		assert.equal(uint8BEwLkRU, BigInt("18"))
		await expect(AntiBaseProtocoluBttjdU._mint.call(addressgONPaBs, uinteBwjUlb, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolC5sHoh8 = await AntiBaseProtocol.new({from: accounts[1]});
		const uintVKTCKKI = BigInt("1771")
		const addressnYA51ER = accounts[2]
		const boolBN242pM = await AntiBaseProtocolC5sHoh8.approve.call(addressnYA51ER, uintVKTCKKI, {from: accounts[5]});

		assert.equal(boolBN242pM, true)
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolC5sHoh8 = await AntiBaseProtocol.new({from: accounts[1]});
		const uintDNWCJC6 = BigInt("225")
		const uintVPbM4ei = BigInt("1794")
		const uintLARRRw1 = BigInt("1784")
		const addressHlnXijy = accounts[3]
		const uint256iVldYki = await AntiBaseProtocolC5sHoh8.findRewardFee.call(uintDNWCJC6, {from: accounts[1]});
		const uint256TQTSrb0 = await AntiBaseProtocolC5sHoh8.totalSupply.call({from: accounts[3]});
		const uint256IMloXm5 = await AntiBaseProtocolC5sHoh8.findRewardFee.call(uintVPbM4ei, {from: accounts[2]});
		const boolBN242pM = await AntiBaseProtocolC5sHoh8.approve.call(addressHlnXijy, uintLARRRw1, {from: accounts[5]});

		assert.equal(boolBN242pM, true)
		assert.equal(uint256IMloXm5, BigInt("90"))
		assert.equal(uint256TQTSrb0, BigInt("31250000000000000000"))
		assert.equal(uint256iVldYki, BigInt("15"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolC5sHoh8 = await AntiBaseProtocol.new({from: accounts[1]});
		const addressjvsLD42 = accounts[1]
		const uintIVzibKg = BigInt("1571")
		const uintoEdkKTV = BigInt("187")
		const uint256QLZWnz8 = await AntiBaseProtocolC5sHoh8.balanceOf.call(addressjvsLD42, {from: "0x0000000000000000000000000000000000000001"});
		await AntiBaseProtocolC5sHoh8.renounceOwnership.call({from: accounts[1]});
		const uint256iKTHXyZ = await AntiBaseProtocolC5sHoh8.burn.call(uintIVzibKg, {from: accounts[1]});
		const uint256iVldYki = await AntiBaseProtocolC5sHoh8.findRewardFee.call(uintoEdkKTV, {from: accounts[1]});

		assert.equal(uint256QLZWnz8, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolC5sHoh8.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})