const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintjX1EY0y = BigInt("1395")
		const stringttsB72d = "3e2R8ah2pcfSHLgTChd4UwA5CV"
		const stringKZPVnrY = "JEDNBJjahfNedeZp0GqfawPaE4bu8xoTDpmCbHA57"
		const MARVELCOINsfQceV = await MARVELCOIN.new(uintjX1EY0y, stringttsB72d, stringKZPVnrY, {from: accounts[2]});
		const uinte8YSTVs = BigInt("1834")
		const uintlTf6aJK = BigInt("74")
		const addresskY0IaBP = accounts[3]
		const addressNY1AZYi = accounts[2]
		const uintkZWefwa = BigInt("624")
		const addressrChyKQD = "0x0000000000000000000000000000000000000001"
		const booltPaE8p0 = await MARVELCOINsfQceV.burn.call(uinte8YSTVs, {from: accounts[3]});
		const boolhv2tNps = await MARVELCOINsfQceV.transferFrom.call(addressNY1AZYi, addresskY0IaBP, uintlTf6aJK, {from: accounts[1]});
		const booleLOd2z = await MARVELCOINsfQceV.transfer.call(addressrChyKQD, uintkZWefwa, {from: accounts[4]});

		await expect(MARVELCOINsfQceV.burn.call(uinte8YSTVs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintZUdMqN = BigInt("656")
		const stringWLuCvV = "zH48oAA79ZxgpnNLLr5kRrLGkYBQYrDbGs3zIOX2k26xY7AhTFgjx1HUqLCemf2FxNjhcfP11fYoq5olnMqmPDyVg"
		const stringMwhCn5Y = "jqfC5ZtWveZlvzVgrrUG5h0VGbjKPQqeWTWndjxH5RD9r7yzIqGUt34s862zyeK8tzCMnh7358CL8sC9aTT"
		const MARVELCOINkxykqSf = await MARVELCOIN.new(uintZUdMqN, stringWLuCvV, stringMwhCn5Y, {from: accounts[4]});
		const uintvIExRb7 = BigInt("140")
		const addressqxCqC8o = accounts[2]
		const addressfao0wKE = accounts[3]
		const uintHNuCa6 = BigInt("801")
		const byteNd7iF8M = "0x090607090e1e1002041a161507151f07190e1f1b1f141313"
		const uintIhXxaLg = BigInt("624")
		const address7rAUMO = accounts[3]
		const boolz7Z8W8b = await MARVELCOINkxykqSf.transferFrom.call(addressfao0wKE, addressqxCqC8o, uintvIExRb7, {from: accounts[3]});
		const boolkqs15LD = await MARVELCOINkxykqSf.burn.call(uintHNuCa6, {from: accounts[3]});
		const boolVw6mx6w = await MARVELCOINkxykqSf.approveAndCall.call(address7rAUMO, uintIhXxaLg, byteNd7iF8M, {from: accounts[3]});

		await expect(MARVELCOINkxykqSf.transferFrom.call(addressfao0wKE, addressqxCqC8o, uintvIExRb7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintnTAKd3m = BigInt("227")
		const stringKKEqZwT = "2KGVvLySQnMRYiCxMLj"
		const stringqVLQCAt = "ZK1TpnO7B1uW4EvwV60mWO4XlwkEacmmGO"
		const MARVELCOINiPsXbKO = await MARVELCOIN.new(uintnTAKd3m, stringKKEqZwT, stringqVLQCAt, {from: accounts[5]});
		const uintNDEQhzf = BigInt("41")
		const addressXPdKviA = accounts[2]
		const uintmrlC53b = BigInt("167")
		const uintAspvGI4 = BigInt("255")
		const addressVLBdaz2 = accounts[3]
		const addressciCb5R = accounts[4]
		const uinttMZPC51 = BigInt("891")
		const uinto0Zdgmf = BigInt("1190")
		const uintsQ3LqwY = BigInt("1837")
		const addressHt291Je = accounts[0]
		const boolOw3W8dx = await MARVELCOINiPsXbKO.transfer.call(addressXPdKviA, uintNDEQhzf, {from: accounts[4]});
		const boolPokxpYF = await MARVELCOINiPsXbKO.burn.call(uintmrlC53b, {from: accounts[5]});
		const boolgWXTkd1 = await MARVELCOINiPsXbKO.transferFrom.call(addressciCb5R, addressVLBdaz2, uintAspvGI4, {from: accounts[5]});
		const boolLeKLl2n = await MARVELCOINiPsXbKO.burn.call(uinttMZPC51, {from: accounts[0]});
		const boolq5cQ6Da = await MARVELCOINiPsXbKO.burn.call(uinto0Zdgmf, {from: accounts[3]});
		const boolB9Q6eX0 = await MARVELCOINiPsXbKO.burnFrom.call(addressHt291Je, uintsQ3LqwY, {from: accounts[0]});

		await expect(MARVELCOINiPsXbKO.transfer.call(addressXPdKviA, uintNDEQhzf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintvHbRgvA = BigInt("1603")
		const stringvsekuJ5 = "QCUFySiAuo6dSOtTHHZzEC79XWtEL87Swr1dAGmCNv1HhYWhy2JqMssfdzgWXFuoTtb8fEH8kg"
		const stringNcY0MQV = "souz3UNbETFp0jlXrhjMnCtJnn9FfeplFw7H5e41a2qf7BAghYDw7hNIPqPlSFNdOd"
		const MARVELCOINiAmuEgf = await MARVELCOIN.new(uintvHbRgvA, stringvsekuJ5, stringNcY0MQV, {from: accounts[2]});
		const uintrtiGg3a = BigInt("1412")
		const addressdhLBy7J = accounts[2]
		const uintDbplECW = BigInt("447")
		const uintEmGDL07 = BigInt("687")
		const addressgGB16r = accounts[1]
		const uintpmDb3FN = BigInt("1000")
		const addressSgMgSiH = accounts[1]
		const uintR5YtMPe = BigInt("1362")
		const addressHbfwCkE = accounts[3]
		const addressLuLbin6 = accounts[2]
		const boolMaBvTpd = await MARVELCOINiAmuEgf.burnFrom.call(addressdhLBy7J, uintrtiGg3a, {from: accounts[1]});
		const boolYH4Vy3P = await MARVELCOINiAmuEgf.burn.call(uintDbplECW, {from: accounts[3]});
		const boolEbHRG39 = await MARVELCOINiAmuEgf.approve.call(addressgGB16r, uintEmGDL07, {from: accounts[4]});
		const boolpCkCp5s = await MARVELCOINiAmuEgf.approve.call(addressSgMgSiH, uintpmDb3FN, {from: accounts[3]});
		const bool8eyQRK = await MARVELCOINiAmuEgf.transferFrom.call(addressLuLbin6, addressHbfwCkE, uintR5YtMPe, {from: accounts[3]});

		await expect(MARVELCOINiAmuEgf.burnFrom.call(addressdhLBy7J, uintrtiGg3a, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uint7NusaV = BigInt("1656")
		const stringM21sfla = "Gn2ygb35yrs2o7umVunWIu1TBNMYDgIvMdwHLBdH"
		const stringVpFp6Oq = "UMqLxgd13k5p6mxlDVykXfhEgsihPjosoS54mASn204XhThGEJ6onq6j1gVjUX0YjhjNFhH6kGGYZbzhaWTfyim3EEdxsfdTe"
		const MARVELCOINLNc9g5o = await MARVELCOIN.new(uint7NusaV, stringM21sfla, stringVpFp6Oq, {from: accounts[5]});
		const byteoTS6fYI = "0x101215171d0913171318070904"
		const uintXZ53jfP = BigInt("1107")
		const addressSWd4XbZ = accounts[0]
		const uintPbUfD9k = BigInt("966")
		const boolR1zAUM = await MARVELCOINLNc9g5o.approveAndCall.call(addressSWd4XbZ, uintXZ53jfP, byteoTS6fYI, {from: accounts[0]});
		const boolZsUj2k9 = await MARVELCOINLNc9g5o.burn.call(uintPbUfD9k, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MARVELCOINLNc9g5o.approveAndCall.call(addressSWd4XbZ, uintXZ53jfP, byteoTS6fYI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintO0RU5nm = BigInt("1051")
		const stringYtA5g3h = "NLedk1cLBKpwn0fx7uSNtlnPlOQ2TzvLytpER8AMwhysG3ztoeFoi46Rn2HV"
		const stringlUMQtxQ = "bkVAwmMMQBH2DQWVWpY7T"
		const MARVELCOINpn2e7Nj = await MARVELCOIN.new(uintO0RU5nm, stringYtA5g3h, stringlUMQtxQ, {from: "0x0000000000000000000000000000000000000001"});
		const uintDVQhMKf = BigInt("58")
		const addresswqIBLjE = accounts[3]
		const addressSGyd8fe = accounts[0]
		const uintxsTiaVv = BigInt("693")
		const uintNxnu5wV = BigInt("1760")
		const addressqcVfS7a = accounts[4]
		const byteWGcyb5e = "0x1a030212000b07020c0b0d1803000809120615191012090c1e"
		const uinto1HMYng = BigInt("901")
		const addressW0C1ZAb = accounts[4]
		const uintr8e6jjv = BigInt("189")
		const addresshnwmBSh = accounts[2]
		const uintrpbFoOH = BigInt("1081")
		const addressIplQT1 = "0x0000000000000000000000000000000000000001"
		const addressza3OE6c = accounts[4]
		const boolFdFAom6 = await MARVELCOINpn2e7Nj.transferFrom.call(addressSGyd8fe, addresswqIBLjE, uintDVQhMKf, {from: accounts[2]});
		const booldZeXVzQ = await MARVELCOINpn2e7Nj.burn.call(uintxsTiaVv, {from: accounts[5]});
		const booliZq3UNq = await MARVELCOINpn2e7Nj.approve.call(addressqcVfS7a, uintNxnu5wV, {from: accounts[4]});
		const booluA0PPN9 = await MARVELCOINpn2e7Nj.approveAndCall.call(addressW0C1ZAb, uinto1HMYng, byteWGcyb5e, {from: accounts[5]});
		const boolc89V7b = await MARVELCOINpn2e7Nj.approve.call(addresshnwmBSh, uintr8e6jjv, {from: accounts[0]});
		const boolKCriYOU = await MARVELCOINpn2e7Nj.transferFrom.call(addressza3OE6c, addressIplQT1, uintrpbFoOH, {from: accounts[3]});
	});
})