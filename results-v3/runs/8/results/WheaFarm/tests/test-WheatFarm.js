const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringz40YODm = "BMhDrzpmzpWkr23zkm8brKjN4Tg22"
		const stringP1mbywX = "ruIiOhH9pwRE1nr5"
		const uintmpKgSRY = BigInt("220")
		const WheatFarmTPG55v = await WheatFarm.new(stringz40YODm, stringP1mbywX, uintmpKgSRY, {from: "0x0000000000000000000000000000000000000001"});
		const addresseUOuRC6 = accounts[1]
		const addressnRRgzco = accounts[3]
		const booljc9DNCT = await WheatFarmTPG55v.transferownership.call(addresseUOuRC6, {from: accounts[2]});
		const uint8Qv3Q4P0 = await WheatFarmTPG55v.decimals.call({from: accounts[4]});
		const boolZSSNsCJ = await WheatFarmTPG55v.transferownership.call(addressnRRgzco, {from: "0x0000000000000000000000000000000000000001"});
		const uint8mnwFPIn = await WheatFarmTPG55v.decimals.call({from: accounts[0]});
	});

	it('test for WheatFarm', async () => {
		const stringk51TBRu = "P8xC5jSuB5KcfGk6m"
		const stringI0KVevX = "hgl8NKknDuG4pKTFeO3FjoHojlYZRXpj5eVodTycWQ1lookUNRzmU"
		const uintM0YHMGY = BigInt("23")
		const WheatFarmzcIleIV = await WheatFarm.new(stringk51TBRu, stringI0KVevX, uintM0YHMGY, {from: accounts[0]});
		const uintr9RkWIq = BigInt("546")
		const addressnOaWA3T = accounts[0]
		const uintYhGPVE = BigInt("1367")
		const addressNRuK6r = "0x0000000000000000000000000000000000000001"
		const addressPvdi4tD = accounts[4]
		const uintUc5oMlh = BigInt("1286")
		const addressEYpaA8x = accounts[1]
		const addressrUdSHjl = accounts[1]
		const uintXNuDKbR = BigInt("745")
		const addressBUikXk8 = accounts[3]
		const boolBZTKfV = await WheatFarmzcIleIV.transfer.call(addressnOaWA3T, uintr9RkWIq, {from: accounts[4]});
		const boolaqOJ0k = await WheatFarmzcIleIV.transferFrom.call(addressPvdi4tD, addressNRuK6r, uintYhGPVE, {from: accounts[2]});
		const boolEvdTvVZ = await WheatFarmzcIleIV.transferFrom.call(addressrUdSHjl, addressEYpaA8x, uintUc5oMlh, {from: accounts[5]});
		const boolVTgP7li = await WheatFarmzcIleIV.transfer.call(addressBUikXk8, uintXNuDKbR, {from: accounts[2]});

		await expect(WheatFarmzcIleIV.transfer.call(addressnOaWA3T, uintr9RkWIq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringKJLHjsW = "M3hV6QJU3yw1lb92A2pyUsPDLcMhojcbjTGYOPr3R5MhkN9zoy22pmLLjcREfcOa7ysnpDURrWXK38HGUCXpLEKWo4vgwyzhz"
		const stringrj5ST1l = "e55cpqA2GRHoAJJj7XeJtdRSXjoQhd7bb9hztcSegXww6XoqO1NmlK9Jeqlr9yBfma9QDnPAtnkGwLTvKnGYP"
		const uint1j8qrq = BigInt("242")
		const WheatFarmjgrENU3 = await WheatFarm.new(stringKJLHjsW, stringrj5ST1l, uint1j8qrq, {from: accounts[4]});
		const addresspKF4H7u = accounts[4]
		const uintIVTXAKu = BigInt("1388")
		const addressJWuz9Yw = accounts[1]
		const addressGuMRqo4 = accounts[0]
		const uint8hw87U4 = await WheatFarmjgrENU3.decimals.call({from: accounts[1]});
		const uintKnEiX02 = await WheatFarmjgrENU3.balanceOf.call(addresspKF4H7u, {from: accounts[4]});
		const boolYoDIPok = await WheatFarmjgrENU3.transfer.call(addressJWuz9Yw, uintIVTXAKu, {from: accounts[3]});
		const booli42yHzR = await WheatFarmjgrENU3.transferownership.call(addressGuMRqo4, {from: accounts[0]});

		assert.equal(uint8hw87U4, BigInt("18"))
		assert.equal(uintKnEiX02, BigInt("242000000000000000000"))
		await expect(WheatFarmjgrENU3.transfer.call(addressJWuz9Yw, uintIVTXAKu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringVZf7sL1 = "1k8sKzXlR5P8DBGs4ac4yHmywNbUB4"
		const stringHIZGuD0 = "BGi8WEceXg1uwULdGpD39SrAme"
		const uintEdSqPef = BigInt("172")
		const WheatFarmtjsZgv1 = await WheatFarm.new(stringVZf7sL1, stringHIZGuD0, uintEdSqPef, {from: accounts[0]});
		const uintm183Rg6 = BigInt("57")
		const addressw3cVZy0 = accounts[0]
		const addressPNtjBAz = accounts[2]
		const uintM6ekrMu = BigInt("1197")
		const addressmByLwvs = "0x0000000000000000000000000000000000000001"
		const booljdZSYD3 = await WheatFarmtjsZgv1.transferFrom.call(addressPNtjBAz, addressw3cVZy0, uintm183Rg6, {from: accounts[3]});
		const uintBVqsUpg = await WheatFarmtjsZgv1.totalSupply.call({from: accounts[5]});
		const boolMZkq3JS = await WheatFarmtjsZgv1.decreaseAllowance.call(addressmByLwvs, uintM6ekrMu, {from: accounts[5]});

		await expect(WheatFarmtjsZgv1.transferFrom.call(addressPNtjBAz, addressw3cVZy0, uintm183Rg6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringVQepLBf = "tAoDxuXWvZbks9795Kln9A1bRZU4e0PEWtg4B5QHl3hwQQd1k7wb1rC3bVgWq"
		const stringWCAAyO = "8vjbdVuADQbePoIF5f3IGuHcotaw"
		const uintgs3FdG = BigInt("1249")
		const WheatFarmzWeh2Sc = await WheatFarm.new(stringVQepLBf, stringWCAAyO, uintgs3FdG, {from: accounts[0]});
		const uintkFjKusW = BigInt("229")
		const addressnUfMKve = accounts[4]
		const uinthTtXucR = BigInt("1885")
		const addressOn7PX1H = accounts[0]
		const uinttNPFp5 = BigInt("760")
		const addresspC584gq = accounts[0]
		const boolWt4pbvc = await WheatFarmzWeh2Sc.approve.call(addressnUfMKve, uintkFjKusW, {from: accounts[5]});
		const boolG4j5NY = await WheatFarmzWeh2Sc.decreaseAllowance.call(addressOn7PX1H, uinthTtXucR, {from: accounts[1]});
		const boolj8tP8r9 = await WheatFarmzWeh2Sc.decreaseAllowance.call(addresspC584gq, uinttNPFp5, {from: accounts[5]});

		assert.equal(boolWt4pbvc, true)
		await expect(WheatFarmzWeh2Sc.decreaseAllowance.call(addressOn7PX1H, uinthTtXucR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringKJLHjsW = "M3hV6QJU3yw1lb92A2pyUsPDLcMhojcbjTGYOPr3R5MhkN9zoy22pmLLjcREfcOa7ysnpDURrWXK38HGUCXpLEKWo4vgwyzhz"
		const stringrj5ST1l = "e55cpqA2GRHoAJJj7XeJtdRSXjoQhd7bb9hztcSegXww6XoqO1NmlK9Jeqlr9yBfma9QDnPAtnkGwLTvKnGYP"
		const uintVHYGQZU = BigInt("242")
		const WheatFarmjgrENU3 = await WheatFarm.new(stringKJLHjsW, stringrj5ST1l, uintVHYGQZU, {from: accounts[4]});
		const addresspyU0Jc4 = accounts[4]
		const addressXxk2xla = accounts[1]
		const uintD5Oa8Mt = BigInt("1388")
		const addresseSdugdD = accounts[1]
		const addresskbZI9zA = accounts[0]
		const uint8hw87U4 = await WheatFarmjgrENU3.decimals.call({from: accounts[1]});
		const uintKnEiX02 = await WheatFarmjgrENU3.balanceOf.call(addresspyU0Jc4, {from: accounts[4]});
		const boolESEyB2c = await WheatFarmjgrENU3.transferownership.call(addressXxk2xla, {from: accounts[1]});
		const boolYoDIPok = await WheatFarmjgrENU3.transfer.call(addresseSdugdD, uintD5Oa8Mt, {from: accounts[3]});
		const booli42yHzR = await WheatFarmjgrENU3.transferownership.call(addresskbZI9zA, {from: accounts[0]});

		assert.equal(uint8hw87U4, BigInt("18"))
		assert.equal(uintKnEiX02, BigInt("242000000000000000000"))
		await expect(WheatFarmjgrENU3.transferownership.call(addressXxk2xla, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringVZf7sL1 = "1k8sKzXlR5P8DBGs4ac4yHmywNbUB4"
		const stringHIZGuD0 = "BGi8WEceXg1uwULdGpD39SrAme"
		const uintybklHAd = BigInt("172")
		const WheatFarmtjsZgv1 = await WheatFarm.new(stringVZf7sL1, stringHIZGuD0, uintybklHAd, {from: accounts[0]});
		const uintfg0kJTO = BigInt("163")
		const addresshRoahry = accounts[0]
		const addressdKLkyZ7 = accounts[1]
		const uintMvCgRpm = BigInt("536")
		const addressDUasXVD = accounts[2]
		const uintV3Mp8yp = BigInt("57")
		const addressCdiRPzL = accounts[1]
		const addressa8hRvQr = accounts[2]
		const uintrFcF2WT = BigInt("1197")
		const addressh3LTmmM = "0x0000000000000000000000000000000000000001"
		const boolwt6ZkfV = await WheatFarmtjsZgv1.approve.call(addresshRoahry, uintfg0kJTO, {from: accounts[0]});
		const uintY14CZqq = await WheatFarmtjsZgv1.balanceOf.call(addressdKLkyZ7, {from: accounts[0]});
		const boolIFajMIt = await WheatFarmtjsZgv1.approveAndCall.call(addressDUasXVD, uintMvCgRpm, {from: accounts[1]});
		const booljdZSYD3 = await WheatFarmtjsZgv1.transferFrom.call(addressa8hRvQr, addressCdiRPzL, uintV3Mp8yp, {from: accounts[3]});
		const boolMZkq3JS = await WheatFarmtjsZgv1.decreaseAllowance.call(addressh3LTmmM, uintrFcF2WT, {from: accounts[5]});

		assert.equal(boolwt6ZkfV, true)
		assert.equal(uintY14CZqq, BigInt("0"))
		await expect(WheatFarmtjsZgv1.approveAndCall.call(addressDUasXVD, uintMvCgRpm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringVZf7sL1 = "1k8sKzXlR5P8DBGs4ac4yHmywNbUB4"
		const stringHIZGuD0 = "BGi8WEceXg1uwULdGpD39SrAme"
		const uintZmeXfRO = BigInt("172")
		const WheatFarmtjsZgv1 = await WheatFarm.new(stringVZf7sL1, stringHIZGuD0, uintZmeXfRO, {from: accounts[0]});
		const uintVgUmjCB = BigInt("0")
		const addresso287ng = accounts[0]
		const addressSEhRqZo = accounts[2]
		const uintoRAqNQl = BigInt("1037")
		const addressfWQBK3 = accounts[0]
		const uintpDh0uGF = BigInt("1396")
		const addressbelrorT = accounts[0]
		const booljdZSYD3 = await WheatFarmtjsZgv1.transferFrom.call(addressSEhRqZo, addresso287ng, uintVgUmjCB, {from: accounts[3]});
		const boolCRKp0i6 = await WheatFarmtjsZgv1.approveAndCall.call(addressfWQBK3, uintoRAqNQl, {from: accounts[1]});
		const booloKGQKvR = await WheatFarmtjsZgv1.approve.call(addressbelrorT, uintpDh0uGF, {from: accounts[0]});

		assert.equal(booljdZSYD3, true)
		await expect(WheatFarmtjsZgv1.approveAndCall.call(addressfWQBK3, uintoRAqNQl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringVZf7sL1 = "1k8sKzXlR5P8DBGs4ac4yHmywNbUB4"
		const stringHIZGuD0 = "BGi8WEceXg1uwULdGpD39SrAme"
		const uintymtUT1z = BigInt("172")
		const WheatFarmtjsZgv1 = await WheatFarm.new(stringVZf7sL1, stringHIZGuD0, uintymtUT1z, {from: accounts[0]});
		const uintXBPQ5XR = BigInt("0")
		const addressVvOBErH = accounts[0]
		const addresstUsMXH8 = accounts[2]
		const uintHsAghF9 = BigInt("1693")
		const addressmVtb9Cp = accounts[4]
		const uintcSDJpJB = BigInt("451")
		const addresstigmdVH = accounts[4]
		const booljdZSYD3 = await WheatFarmtjsZgv1.transferFrom.call(addresstUsMXH8, addressVvOBErH, uintXBPQ5XR, {from: accounts[3]});
		const stringE80sB1h = await WheatFarmtjsZgv1.symbol.call({from: accounts[0]});
		const boolQq5wTK0 = await WheatFarmtjsZgv1.approve.call(addressmVtb9Cp, uintHsAghF9, {from: accounts[5]});
		const uintEuC3eKK = await WheatFarmtjsZgv1.totalSupply.call({from: accounts[3]});
		const boolnN0dpAi = await WheatFarmtjsZgv1.approveAndCall.call(addresstigmdVH, uintcSDJpJB, {from: accounts[0]});

		assert.equal(boolQq5wTK0, true)
		assert.equal(booljdZSYD3, true)
		assert.equal(boolnN0dpAi, true)
		assert.equal(stringE80sB1h, "BGi8WEceXg1uwULdGpD39SrAme")
		assert.equal(uintEuC3eKK, BigInt("172000000000000000000"))
	});

	it('test for WheatFarm', async () => {
		const stringO3Gfwpl = "eA78olmJjG901RfgRfokz"
		const stringKsjbx1s = "1TdcL4b7zo877N2putMmKCt4me3T1ieF3eAEgbx9p7UphC5LMIwz3Qpg88GtOSBX"
		const uintWxCxi4w = BigInt("1209")
		const WheatFarmm5r1fSY = await WheatFarm.new(stringO3Gfwpl, stringKsjbx1s, uintWxCxi4w, {from: accounts[3]});
		const uintJQyvlB = BigInt("422")
		const addressAstxWJ4 = accounts[3]
		const addresskTbyma4 = "0x0000000000000000000000000000000000000001"
		const uintwWTvU1X = BigInt("1090")
		const addresstdbnsyl = accounts[4]
		const uintnllLfDO = BigInt("1631")
		const addressaaVkJ4M = accounts[1]
		const addressjneepk = accounts[0]
		const boolVxsFRud = await WheatFarmm5r1fSY.approve.call(addressAstxWJ4, uintJQyvlB, {from: "0x0000000000000000000000000000000000000001"});
		const boolgpG2zHL = await WheatFarmm5r1fSY.transferownership.call(addresskTbyma4, {from: accounts[3]});
		const boolp1qiwiV = await WheatFarmm5r1fSY.approveAndCall.call(addresstdbnsyl, uintwWTvU1X, {from: accounts[0]});
		const boolRtF0mSm = await WheatFarmm5r1fSY.transferFrom.call(addressjneepk, addressaaVkJ4M, uintnllLfDO, {from: accounts[3]});

		assert.equal(boolVxsFRud, true)
		assert.equal(boolgpG2zHL, true)
		await expect(WheatFarmm5r1fSY.approveAndCall.call(addresstdbnsyl, uintwWTvU1X, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})