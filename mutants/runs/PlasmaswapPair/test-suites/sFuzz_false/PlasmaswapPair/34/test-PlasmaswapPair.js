const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairAqmgwWG = await PlasmaswapPair.new({from: accounts[2]});
		const addressS5Ov9nC = accounts[2]
		const addressIc9Ghhx = accounts[3]
		const addressjYdbLst = accounts[2]
		const addressCI6g8FO = await PlasmaswapPairAqmgwWG.initialize.call(addressIc9Ghhx, addressS5Ov9nC, {from: accounts[3]});
		await PlasmaswapPairAqmgwWG.sync.call({from: accounts[3]});
		const addressqFXs4uB = await PlasmaswapPairAqmgwWG.skim.call(addressjYdbLst, {from: accounts[2]});
		const uint112OXbGWr5 = await PlasmaswapPairAqmgwWG.getReserves.call({from: accounts[1]});

		await expect(PlasmaswapPairAqmgwWG.initialize.call(addressIc9Ghhx, addressS5Ov9nC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairMUVgcu2 = await PlasmaswapPair.new({from: accounts[2]});
		const addressCwcDlnL = accounts[2]
		const addressg4Evmby = accounts[2]
		const byteJcqszjK = "0x131b20"
		const addressHSvRn24 = accounts[5]
		const uintEL2UyPv = BigInt("1726")
		const uintBnacvNU = BigInt("1403")
		const uint112cVOJpvC = await PlasmaswapPairMUVgcu2.getReserves.call({from: accounts[4]});
		const addressGRE9zIV = await PlasmaswapPairMUVgcu2.initialize.call(addressg4Evmby, addressCwcDlnL, {from: accounts[0]});
		await PlasmaswapPairMUVgcu2.lock.call({from: accounts[2]});
		const uintncrd5LG = await PlasmaswapPairMUVgcu2.swap.call(uintBnacvNU, uintEL2UyPv, addressHSvRn24, byteJcqszjK, {from: accounts[1]});

		await expect(PlasmaswapPairMUVgcu2.initialize.call(addressg4Evmby, addressCwcDlnL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairKQvSyu = await PlasmaswapPair.new({from: accounts[4]});
		const byteEovN7wO = "0x1d0d0617"
		const addresspyfuk0x = accounts[4]
		const uinte3TnTgY = BigInt("956")
		const uintWWGapW0 = BigInt("651")
		const addressgb9YMqz = "0x0000000000000000000000000000000000000001"
		const uintW2OAtVA = await PlasmaswapPairKQvSyu.swap.call(uintWWGapW0, uinte3TnTgY, addresspyfuk0x, byteEovN7wO, {from: accounts[3]});
		await PlasmaswapPairKQvSyu.lock.call({from: accounts[4]});
		const addressmaE4ko = await PlasmaswapPairKQvSyu.skim.call(addressgb9YMqz, {from: accounts[0]});

		await expect(PlasmaswapPairKQvSyu.swap.call(uintWWGapW0, uinte3TnTgY, addresspyfuk0x, byteEovN7wO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairHdT1Qej = await PlasmaswapPair.new({from: accounts[1]});
		const addressEkg7rSJ = accounts[4]
		const addressb3UHs3G = accounts[3]
		const addresssl7mikT = accounts[0]
		const byteZyNcKZ2 = "0x0b0e140f0a020d0611"
		const address4duQdq = accounts[2]
		const uintboQeLL = BigInt("32")
		const uintW0dWyv9 = BigInt("27")
		const addressVqQLEri = accounts[3]
		const addressIxYX1Sh = await PlasmaswapPairHdT1Qej.skim.call(addressEkg7rSJ, {from: accounts[1]});
		const addressws1y3Uk = await PlasmaswapPairHdT1Qej.initialize.call(addresssl7mikT, addressb3UHs3G, {from: accounts[5]});
		const uintOuW6wah = await PlasmaswapPairHdT1Qej.swap.call(uintW0dWyv9, uintboQeLL, address4duQdq, byteZyNcKZ2, {from: accounts[0]});
		const uint112FKezgs0 = await PlasmaswapPairHdT1Qej.getReserves.call({from: accounts[2]});
		const uintBFwCC0J = await PlasmaswapPairHdT1Qej.burn.call(addressVqQLEri, {from: accounts[1]});

		await expect(PlasmaswapPairHdT1Qej.skim.call(addressEkg7rSJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairvynkVPp = await PlasmaswapPair.new({from: accounts[3]});
		const addressuXvcl3L = accounts[1]
		const addressk83iRm = "0x0000000000000000000000000000000000000001"
		const addressXyl8hjT = "0x0000000000000000000000000000000000000001"
		const addressHEdZaZl = accounts[3]
		const bytemwnrQCQ = "0x03031b0815100f1d1c190b14191a161515000c061a1d"
		const addressgwSL6uS = accounts[0]
		const uintCELz4Zu = BigInt("271")
		const uintMkkJrcz = BigInt("210")
		const addressuARHlvM = accounts[3]
		const uintzQRQPv = await PlasmaswapPairvynkVPp.mint.call(addressuXvcl3L, {from: accounts[1]});
		const addressFp60ARp = await PlasmaswapPairvynkVPp.initialize.call(addressXyl8hjT, addressk83iRm, {from: accounts[2]});
		const uintZXsdKZa = await PlasmaswapPairvynkVPp.burn.call(addressHEdZaZl, {from: accounts[2]});
		const uintrAsph6D = await PlasmaswapPairvynkVPp.swap.call(uintMkkJrcz, uintCELz4Zu, addressgwSL6uS, bytemwnrQCQ, {from: accounts[1]});
		const uintdJ5OPQf = await PlasmaswapPairvynkVPp.burn.call(addressuARHlvM, {from: accounts[3]});

		await expect(PlasmaswapPairvynkVPp.mint.call(addressuXvcl3L, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairXPP3vz = await PlasmaswapPair.new({from: accounts[0]});
		const addressdImaMO = accounts[0]
		const addressw0kpRXU = accounts[3]
		const addresstOJ3Jc2 = "0x0000000000000000000000000000000000000001"
		const addressW54gSTf = accounts[1]
		const uintaKeIYQg = await PlasmaswapPairXPP3vz.burn.call(addressdImaMO, {from: accounts[1]});
		const addressSrDmCam = await PlasmaswapPairXPP3vz.skim.call(addressw0kpRXU, {from: accounts[5]});
		const addressDinODa8 = await PlasmaswapPairXPP3vz.skim.call(addresstOJ3Jc2, {from: accounts[1]});
		const uint112bCH7I7A = await PlasmaswapPairXPP3vz.getReserves.call({from: accounts[2]});
		const uintmNjMq4g = await PlasmaswapPairXPP3vz.mint.call(addressW54gSTf, {from: accounts[3]});

		await expect(PlasmaswapPairXPP3vz.burn.call(addressdImaMO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairHeJHwm = await PlasmaswapPair.new({from: accounts[2]});
		const addressxVS3QP6 = accounts[3]
		const byteiomZkPv = "0x110f001a1c0b130311011c071a0d020f"
		const addresszK5ARrM = accounts[1]
		const uintt8KuLuA = BigInt("1074")
		const uintTfGYUB = BigInt("1693")
		await PlasmaswapPairHeJHwm.sync.call({from: accounts[4]});
		const uint112Kd0qhx = await PlasmaswapPairHeJHwm.getReserves.call({from: accounts[5]});
		const uintT3r5FMf = await PlasmaswapPairHeJHwm.burn.call(addressxVS3QP6, {from: accounts[2]});
		const uintKOogABU = await PlasmaswapPairHeJHwm.swap.call(uintTfGYUB, uintt8KuLuA, addresszK5ARrM, byteiomZkPv, {from: accounts[0]});

		await expect(PlasmaswapPairHeJHwm.sync.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairJRxfdF = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const bytepAgFeeI = "0x07"
		const addressuvoYSs0 = accounts[4]
		const uintwOXEkVx = BigInt("1310")
		const uintiUeVmZe = BigInt("597")
		const uintqdyVGb8 = await PlasmaswapPairJRxfdF.swap.call(uintiUeVmZe, uintwOXEkVx, addressuvoYSs0, bytepAgFeeI, {from: accounts[1]});
		const uint112AP5mmZu = await PlasmaswapPairJRxfdF.getReserves.call({from: accounts[3]});
		const uint112EFTAniK = await PlasmaswapPairJRxfdF.getReserves.call({from: accounts[2]});
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairHeJHwm = await PlasmaswapPair.new({from: accounts[2]});
		await PlasmaswapPairHeJHwm.lock.call({from: accounts[0]});
		const uint112Kd0qhx = await PlasmaswapPairHeJHwm.getReserves.call({from: accounts[5]});

		await expect(PlasmaswapPairHeJHwm.lock.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})