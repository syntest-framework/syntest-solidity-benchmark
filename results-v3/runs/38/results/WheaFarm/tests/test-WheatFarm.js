const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringSj9LExT = "Waz6LqtBj7pHRfvoVDl5IyCdtt85rxzyBzF1RxyzxUivYJPQlNFDsX172wse477dGCvyfC1te5ggDcdwamOjPB1jJxHj92PGLB"
		const stringj1VMP77 = "jb2gvFzQIf2hCfCpHZXJt9eyrkTTMXh"
		const uintWkTfTMa = BigInt("160")
		const WheatFarmoh1Ckc = await WheatFarm.new(stringSj9LExT, stringj1VMP77, uintWkTfTMa, {from: accounts[5]});
		const addressg8mS5LO = accounts[2]
		const addressFQrZT1w = accounts[5]
		const address4JhOVo = accounts[3]
		const uintDpbOGX = BigInt("741")
		const addressWEhpLEs = "0x0000000000000000000000000000000000000001"
		const uintFVIbFoX = BigInt("172")
		const addresslyW8Cxg = accounts[3]
		const addressWqIDQXU = accounts[2]
		const uintC9oLQDI = await WheatFarmoh1Ckc.allowance.call(addressFQrZT1w, addressg8mS5LO, {from: accounts[3]});
		const booltRtAsw = await WheatFarmoh1Ckc.transferownership.call(address4JhOVo, {from: accounts[5]});
		const boolSxVLTuv = await WheatFarmoh1Ckc.approve.call(addressWEhpLEs, uintDpbOGX, {from: accounts[0]});
		const boolYytqDr3 = await WheatFarmoh1Ckc.approve.call(addresslyW8Cxg, uintFVIbFoX, {from: accounts[0]});
		const uinthFzlJlf = await WheatFarmoh1Ckc.balanceOf.call(addressWqIDQXU, {from: accounts[2]});

		assert.equal(boolSxVLTuv, true)
		assert.equal(boolYytqDr3, true)
		assert.equal(booltRtAsw, true)
		assert.equal(uintC9oLQDI, BigInt("0"))
		assert.equal(uinthFzlJlf, BigInt("0"))
	});

	it('test for WheatFarm', async () => {
		const stringRqa8us = "4hvBKtRbopf"
		const stringZuUhXqi = "xiMXGgorIGfIW665IwV"
		const uintKJ50kqm = BigInt("1394")
		const WheatFarmj2bvWn0 = await WheatFarm.new(stringRqa8us, stringZuUhXqi, uintKJ50kqm, {from: accounts[1]});
		const uintk6qzsh3 = BigInt("1342")
		const addressJx2u0JW = "0x0000000000000000000000000000000000000001"
		const addressVO76x4w = accounts[2]
		const uintovfLg7v = BigInt("1697")
		const addressjgBDkMN = accounts[3]
		const address5fvP3u = accounts[0]
		const uintXN9fF8E = BigInt("605")
		const addressZ7RcTOM = accounts[4]
		const uint8ym6k4P1 = await WheatFarmj2bvWn0.decimals.call({from: accounts[2]});
		const booliAeg3X4 = await WheatFarmj2bvWn0.transferFrom.call(addressVO76x4w, addressJx2u0JW, uintk6qzsh3, {from: accounts[3]});
		const boolS7KNFwz = await WheatFarmj2bvWn0.transferFrom.call(address5fvP3u, addressjgBDkMN, uintovfLg7v, {from: accounts[1]});
		const boolihbikqq = await WheatFarmj2bvWn0.decreaseAllowance.call(addressZ7RcTOM, uintXN9fF8E, {from: accounts[2]});

		assert.equal(uint8ym6k4P1, BigInt("18"))
		await expect(WheatFarmj2bvWn0.transferFrom.call(addressVO76x4w, addressJx2u0JW, uintk6qzsh3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringVRC4Bj4 = "VAkuvtViRdtkLDSJ4tdHAXIUp1FJxjBZRthowg5lJ1aJfKviZGjLe3PE0GIwCqz"
		const stringoMFcn98 = "SaPdYqEgI3xk2Ho2WtioCqduChqbUimNgwO5d6cCGGODA0X7iemQlaxmefaw9uSj6mqA0U9ZnOYdfHIm06jqbiPQcKb2GBB4k"
		const uintTqf9fEW = BigInt("119")
		const WheatFarmc4bFhti = await WheatFarm.new(stringVRC4Bj4, stringoMFcn98, uintTqf9fEW, {from: accounts[2]});
		const uintPy0kjd = BigInt("336")
		const addressk23Bfgx = accounts[3]
		const uintVDN1cL = BigInt("1763")
		const addressc3rDpbs = accounts[1]
		const addressUXi4L3O = "0x0000000000000000000000000000000000000001"
		const uintje7fRTv = BigInt("2009")
		const addressekWmt3 = accounts[0]
		const boolNgV1706 = await WheatFarmc4bFhti.transfer.call(addressk23Bfgx, uintPy0kjd, {from: accounts[0]});
		const boolupmVEcq = await WheatFarmc4bFhti.transferFrom.call(addressUXi4L3O, addressc3rDpbs, uintVDN1cL, {from: accounts[2]});
		const boolTRcqTg4 = await WheatFarmc4bFhti.transfer.call(addressekWmt3, uintje7fRTv, {from: accounts[3]});
		const stringloe9gaH = await WheatFarmc4bFhti.name.call({from: accounts[2]});

		await expect(WheatFarmc4bFhti.transfer.call(addressk23Bfgx, uintPy0kjd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const string8CcOV4 = "VRO47SUszGdwhSx1pHHQYwmJTFsgqWOQMFHiBzreK5vmlLcVfIRRkP9gudczVYNyfWV"
		const stringt6LBBqH = "Aiy7y4CGcjiXXnGjq9XuGj5oxEAzeGeyX5a3g8VqNVSqPp1oMWNxRHUXMOPfvTJNDR4vt8zfC"
		const uintMyZC5AF = BigInt("520")
		const WheatFarmIfel9S = await WheatFarm.new(string8CcOV4, stringt6LBBqH, uintMyZC5AF, {from: accounts[4]});
		const uintkBjxw56 = BigInt("113")
		const addressGTe5s5 = accounts[4]
		const uintuVngmTM = BigInt("31")
		const addresshaiEn6e = accounts[1]
		const addressqxVKrRa = accounts[2]
		const boolGjkrb4s = await WheatFarmIfel9S.decreaseAllowance.call(addressGTe5s5, uintkBjxw56, {from: accounts[5]});
		const stringa8tvLGn = await WheatFarmIfel9S.name.call({from: "0x0000000000000000000000000000000000000001"});
		const stringSxH1Qrx = await WheatFarmIfel9S.symbol.call({from: accounts[0]});
		const stringv8TgLS8 = await WheatFarmIfel9S.name.call({from: accounts[3]});
		const boolyLZVXPi = await WheatFarmIfel9S.transferFrom.call(addressqxVKrRa, addresshaiEn6e, uintuVngmTM, {from: accounts[3]});

		await expect(WheatFarmIfel9S.decreaseAllowance.call(addressGTe5s5, uintkBjxw56, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringYaK1fwc = "BufgWwuxd5nSVr7ftqL37oGeIQVOTrPNMHrKNEH5WMPy1VaCeouCmoEq6NzOQY"
		const stringBsJw7XZ = "Unkl3DYf4B4nkFM56EqpbfIz8FLTHMu6GZWc4Ki2k8J8pWUqD"
		const uintmJIQnQ = BigInt("1137")
		const WheatFarmljGdMNE = await WheatFarm.new(stringYaK1fwc, stringBsJw7XZ, uintmJIQnQ, {from: "0x0000000000000000000000000000000000000001"});
		const uintmHpQ6Zu = BigInt("1870")
		const addressX8xi6iy = accounts[2]
		const uintBDxcPPI = BigInt("282")
		const addresshUApVo4 = accounts[0]
		const uinthzDSeko = BigInt("1090")
		const addressKFXhBGc = accounts[2]
		const addressdHUiI5C = "0x0000000000000000000000000000000000000001"
		const booll5tjtDg = await WheatFarmljGdMNE.transfer.call(addressX8xi6iy, uintmHpQ6Zu, {from: accounts[1]});
		const stringuS4mgV9 = await WheatFarmljGdMNE.symbol.call({from: accounts[5]});
		const boolbJVPcIq = await WheatFarmljGdMNE.decreaseAllowance.call(addresshUApVo4, uintBDxcPPI, {from: accounts[3]});
		const booljPoPzp = await WheatFarmljGdMNE.transfer.call(addressKFXhBGc, uinthzDSeko, {from: accounts[4]});
		const uintc49CMSz = await WheatFarmljGdMNE.balanceOf.call(addressdHUiI5C, {from: accounts[4]});
	});

	it('test for WheatFarm', async () => {
		const stringzP55FNN = "gLSG6nNnpyIYCp8LGdfMTnzRAtSwadc36x"
		const stringDmZ0XoM = "BlJOhvhHQVd"
		const uintoWRHqb8 = BigInt("200")
		const WheatFarmzmU4icQ = await WheatFarm.new(stringzP55FNN, stringDmZ0XoM, uintoWRHqb8, {from: accounts[3]});
		const uintEuwcNG = BigInt("1074")
		const addresstz11OL4 = accounts[3]
		const stringfFOmNwx = await WheatFarmzmU4icQ.symbol.call({from: accounts[2]});
		const boolryS6a6F = await WheatFarmzmU4icQ.transfer.call(addresstz11OL4, uintEuwcNG, {from: accounts[4]});
		const uint8zd8TfIQ = await WheatFarmzmU4icQ.decimals.call({from: accounts[3]});

		assert.equal(stringfFOmNwx, "BlJOhvhHQVd")
		await expect(WheatFarmzmU4icQ.transfer.call(addresstz11OL4, uintEuwcNG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringuIa5XDs = "LDcsWZw7gw45s2sTpYVV49NhsuHHwYGwXieQp7SBGGXUfTVfGjWu4uHPGlPUli6Nh"
		const stringUo2rwc = "EgtR7tqcnFhP8txStCHkUWKO9j2Ub4I4dl946sAo4SfHPPWfkLiRMHAM5hRfnCa"
		const uintN0mNkFZ = BigInt("588")
		const WheatFarmYYvRwE3 = await WheatFarm.new(stringuIa5XDs, stringUo2rwc, uintN0mNkFZ, {from: accounts[0]});
		const uintz0JFid2 = BigInt("1777")
		const addressKiFMrz1 = accounts[3]
		const uintPnmn8Zz = BigInt("584")
		const addressEmCfa7z = accounts[3]
		const boolUHhRtPW = await WheatFarmYYvRwE3.approveAndCall.call(addressKiFMrz1, uintz0JFid2, {from: "0x0000000000000000000000000000000000000001"});
		const uint8ybE8pOB = await WheatFarmYYvRwE3.decimals.call({from: accounts[3]});
		const stringTyVfABj = await WheatFarmYYvRwE3.name.call({from: accounts[5]});
		const booleoQORKp = await WheatFarmYYvRwE3.decreaseAllowance.call(addressEmCfa7z, uintPnmn8Zz, {from: accounts[1]});

		await expect(WheatFarmYYvRwE3.approveAndCall.call(addressKiFMrz1, uintz0JFid2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringzP55FNN = "gLSG6nNnpyIYCp8LGdfMTnzRAtSwadc36x"
		const stringDmZ0XoM = "BlJOhvhHQVd"
		const uintVQgoHbH = BigInt("200")
		const WheatFarmzmU4icQ = await WheatFarm.new(stringzP55FNN, stringDmZ0XoM, uintVQgoHbH, {from: accounts[3]});
		const uintjXRwwmk = BigInt("22")
		const addressjNb0K0L = accounts[3]
		const uintOvcqD12 = BigInt("0")
		const addressBP7tSfk = accounts[3]
		const boolv45z05R = await WheatFarmzmU4icQ.approveAndCall.call(addressjNb0K0L, uintjXRwwmk, {from: accounts[3]});
		const boolyiclmq = await WheatFarmzmU4icQ.transfer.call(addressBP7tSfk, uintOvcqD12, {from: accounts[2]});
		const uint8zd8TfIQ = await WheatFarmzmU4icQ.decimals.call({from: accounts[3]});

		assert.equal(boolv45z05R, true)
		assert.equal(boolyiclmq, true)
		assert.equal(uint8zd8TfIQ, BigInt("18"))
	});

	it('test for WheatFarm', async () => {
		const stringzP55FNN = "gLSG6nNnpyIYCp8LGdfMTnzRAtSwadc36x"
		const stringDmZ0XoM = "BlJOhvhHQVd"
		const uintRXl5iYO = BigInt("200")
		const WheatFarmzmU4icQ = await WheatFarm.new(stringzP55FNN, stringDmZ0XoM, uintRXl5iYO, {from: accounts[3]});
		const uintRTmyncN = BigInt("0")
		const addressezM4SO4 = accounts[3]
		const boolv45z05R = await WheatFarmzmU4icQ.approveAndCall.call(addressezM4SO4, uintRTmyncN, {from: accounts[3]});

		assert.equal(boolv45z05R, true)
	});
})