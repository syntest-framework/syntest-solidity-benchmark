const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringz40YODm = "BMhDrzpmzpWkr23zkm8brKjN4Tg22"
		const stringP1mbywX = "ruIiOhH9pwRE1nr5"
		const uintmpKgSRY = BigInt("220")
		const OnXFinanceTPG55v = await OnXFinance.new(stringz40YODm, stringP1mbywX, uintmpKgSRY, {from: "0x0000000000000000000000000000000000000001"});
		const addresseUOuRC6 = accounts[1]
		const addressnRRgzco = accounts[3]
		const booljc9DNCT = await OnXFinanceTPG55v.transferownership.call(addresseUOuRC6, {from: accounts[2]});
		const uint8Qv3Q4P0 = await OnXFinanceTPG55v.decimals.call({from: accounts[4]});
		const boolZSSNsCJ = await OnXFinanceTPG55v.transferownership.call(addressnRRgzco, {from: "0x0000000000000000000000000000000000000001"});
		const uint8mnwFPIn = await OnXFinanceTPG55v.decimals.call({from: accounts[0]});
	});

	it('test for OnXFinance', async () => {
		const stringk51TBRu = "P8xC5jSuB5KcfGk6m"
		const stringI0KVevX = "hgl8NKknDuG4pKTFeO3FjoHojlYZRXpj5eVodTycWQ1lookUNRzmU"
		const uintM0YHMGY = BigInt("23")
		const OnXFinancezcIleIV = await OnXFinance.new(stringk51TBRu, stringI0KVevX, uintM0YHMGY, {from: accounts[0]});
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
		const boolBZTKfV = await OnXFinancezcIleIV.transfer.call(addressnOaWA3T, uintr9RkWIq, {from: accounts[4]});
		const boolaqOJ0k = await OnXFinancezcIleIV.transferFrom.call(addressPvdi4tD, addressNRuK6r, uintYhGPVE, {from: accounts[2]});
		const boolEvdTvVZ = await OnXFinancezcIleIV.transferFrom.call(addressrUdSHjl, addressEYpaA8x, uintUc5oMlh, {from: accounts[5]});
		const boolVTgP7li = await OnXFinancezcIleIV.transfer.call(addressBUikXk8, uintXNuDKbR, {from: accounts[2]});

		await expect(OnXFinancezcIleIV.transfer.call(addressnOaWA3T, uintr9RkWIq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringKJLHjsW = "M3hV6QJU3yw1lb92A2pyUsPDLcMhojcbjTGYOPr3R5MhkN9zoy22pmLLjcREfcOa7ysnpDURrWXK38HGUCXpLEKWo4vgwyzhz"
		const stringrj5ST1l = "e55cpqA2GRHoAJJj7XeJtdRSXjoQhd7bb9hztcSegXww6XoqO1NmlK9Jeqlr9yBfma9QDnPAtnkGwLTvKnGYP"
		const uint1j8qrq = BigInt("242")
		const OnXFinancejgrENU3 = await OnXFinance.new(stringKJLHjsW, stringrj5ST1l, uint1j8qrq, {from: accounts[4]});
		const addresspKF4H7u = accounts[4]
		const uintIVTXAKu = BigInt("1388")
		const addressJWuz9Yw = accounts[1]
		const addressGuMRqo4 = accounts[0]
		const uint8hw87U4 = await OnXFinancejgrENU3.decimals.call({from: accounts[1]});
		const uintKnEiX02 = await OnXFinancejgrENU3.balanceOf.call(addresspKF4H7u, {from: accounts[4]});
		const boolYoDIPok = await OnXFinancejgrENU3.transfer.call(addressJWuz9Yw, uintIVTXAKu, {from: accounts[3]});
		const booli42yHzR = await OnXFinancejgrENU3.transferownership.call(addressGuMRqo4, {from: accounts[0]});

		assert.equal(uint8hw87U4, BigInt("18"))
		assert.equal(uintKnEiX02, BigInt("242000000000000000000"))
		await expect(OnXFinancejgrENU3.transfer.call(addressJWuz9Yw, uintIVTXAKu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringVQepLBf = "tAoDxuXWvZbks9795Kln9A1bRZU4e0PEWtg4B5QHl3hwQQd1k7wb1rC3bVgWq"
		const stringWCAAyO = "8vjbdVuADQbePoIF5f3IGuHcotaw"
		const uintgs3FdG = BigInt("1249")
		const OnXFinancezWeh2Sc = await OnXFinance.new(stringVQepLBf, stringWCAAyO, uintgs3FdG, {from: accounts[0]});
		const uintkFjKusW = BigInt("229")
		const addressnUfMKve = accounts[4]
		const uinthTtXucR = BigInt("1885")
		const addressOn7PX1H = accounts[0]
		const uinttNPFp5 = BigInt("760")
		const addresspC584gq = accounts[0]
		const boolWt4pbvc = await OnXFinancezWeh2Sc.approve.call(addressnUfMKve, uintkFjKusW, {from: accounts[5]});
		const boolG4j5NY = await OnXFinancezWeh2Sc.decreaseAllowance.call(addressOn7PX1H, uinthTtXucR, {from: accounts[1]});
		const boolj8tP8r9 = await OnXFinancezWeh2Sc.decreaseAllowance.call(addresspC584gq, uinttNPFp5, {from: accounts[5]});

		assert.equal(boolWt4pbvc, true)
		await expect(OnXFinancezWeh2Sc.decreaseAllowance.call(addressOn7PX1H, uinthTtXucR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringKJLHjsW = "M3hV6QJU3yw1lb92A2pyUsPDLcMhojcbjTGYOPr3R5MhkN9zoy22pmLLjcREfcOa7ysnpDURrWXK38HGUCXpLEKWo4vgwyzhz"
		const stringrj5ST1l = "e55cpqA2GRHoAJJj7XeJtdRSXjoQhd7bb9hztcSegXww6XoqO1NmlK9Jeqlr9yBfma9QDnPAtnkGwLTvKnGYP"
		const uintVHYGQZU = BigInt("242")
		const OnXFinancejgrENU3 = await OnXFinance.new(stringKJLHjsW, stringrj5ST1l, uintVHYGQZU, {from: accounts[4]});
		const addresspyU0Jc4 = accounts[4]
		const addressXxk2xla = accounts[1]
		const uintD5Oa8Mt = BigInt("1388")
		const addresseSdugdD = accounts[1]
		const addresskbZI9zA = accounts[0]
		const uint8hw87U4 = await OnXFinancejgrENU3.decimals.call({from: accounts[1]});
		const uintKnEiX02 = await OnXFinancejgrENU3.balanceOf.call(addresspyU0Jc4, {from: accounts[4]});
		const boolESEyB2c = await OnXFinancejgrENU3.transferownership.call(addressXxk2xla, {from: accounts[1]});
		const boolYoDIPok = await OnXFinancejgrENU3.transfer.call(addresseSdugdD, uintD5Oa8Mt, {from: accounts[3]});
		const booli42yHzR = await OnXFinancejgrENU3.transferownership.call(addresskbZI9zA, {from: accounts[0]});

		assert.equal(uint8hw87U4, BigInt("18"))
		assert.equal(uintKnEiX02, BigInt("242000000000000000000"))
		await expect(OnXFinancejgrENU3.transferownership.call(addressXxk2xla, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringXKfXaXp = "wVL24WRem6LxlBOhP6xwffENeQXV3CQBbyGh6LO7mfVooSbq2oMLmSNbgnNRMa"
		const stringoX4OyJC = "lVNO3fgQHq2eEl3Nai9AGPTWmOuX2sr9qmmLRFoV5OR4PeOJg99"
		const uintOSsmDqD = BigInt("158")
		const OnXFinanceiQmVYO = await OnXFinance.new(stringXKfXaXp, stringoX4OyJC, uintOSsmDqD, {from: accounts[1]});
		const addressbe7feaN = accounts[1]
		const uintJLqhtBb = BigInt("1872")
		const addressEQL3BK7 = "0x0000000000000000000000000000000000000001"
		const addressCG7UvSL = accounts[3]
		const uintKWLppYG = await OnXFinanceiQmVYO.balanceOf.call(addressbe7feaN, {from: accounts[2]});
		const booljzWv4I = await OnXFinanceiQmVYO.approveAndCall.call(addressEQL3BK7, uintJLqhtBb, {from: accounts[2]});
		const uintleFoMW = await OnXFinanceiQmVYO.balanceOf.call(addressCG7UvSL, {from: accounts[0]});

		assert.equal(uintKWLppYG, BigInt("158000000000000000000"))
		await expect(OnXFinanceiQmVYO.approveAndCall.call(addressEQL3BK7, uintJLqhtBb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringVZf7sL1 = "1k8sKzXlR5P8DBGs4ac4yHmywNbUB4"
		const stringHIZGuD0 = "BGi8WEceXg1uwULdGpD39SrAme"
		const uintVMaJ31w = BigInt("172")
		const OnXFinancetjsZgv1 = await OnXFinance.new(stringVZf7sL1, stringHIZGuD0, uintVMaJ31w, {from: accounts[0]});
		const uintzfV7zUG = BigInt("0")
		const addresskcTIPGc = accounts[0]
		const addressmq2AXUl = accounts[2]
		const uintO9zuZRe = BigInt("1791")
		const addressMw1Ol9u = accounts[0]
		const addresslryKWYJ = accounts[3]
		const uintWQFd1gA = BigInt("792")
		const addressOWy8617 = accounts[1]
		const addressuLYJSTw = accounts[3]
		const uintNBVNdgE = BigInt("1197")
		const addresshSPdjGX = "0x0000000000000000000000000000000000000001"
		const uintJCyhA6A = BigInt("1750")
		const addressvntMSH2 = "0x0000000000000000000000000000000000000001"
		const booljdZSYD3 = await OnXFinancetjsZgv1.transferFrom.call(addressmq2AXUl, addresskcTIPGc, uintzfV7zUG, {from: accounts[3]});
		const booljcdO4kt = await OnXFinancetjsZgv1.approveAndCall.call(addressMw1Ol9u, uintO9zuZRe, {from: accounts[2]});
		const boolzFW4GWI = await OnXFinancetjsZgv1.transferownership.call(addresslryKWYJ, {from: accounts[3]});
		const boolQGq3HjZ = await OnXFinancetjsZgv1.transferFrom.call(addressuLYJSTw, addressOWy8617, uintWQFd1gA, {from: accounts[5]});
		const boolMZkq3JS = await OnXFinancetjsZgv1.decreaseAllowance.call(addresshSPdjGX, uintNBVNdgE, {from: accounts[5]});
		const boolH5alMaa = await OnXFinancetjsZgv1.transfer.call(addressvntMSH2, uintJCyhA6A, {from: accounts[1]});

		assert.equal(booljdZSYD3, true)
		await expect(OnXFinancetjsZgv1.approveAndCall.call(addressMw1Ol9u, uintO9zuZRe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringXKfXaXp = "wVL24WRem6LxlBOhP6xwffENeQXV3CQBbyGh6LO7mfVooSbq2oMLmSNbgnNRMa"
		const stringoX4OyJC = "lVNO3fgQHq2eEl3Nai9AGPTWmOuX2sr9qmmLRFoV5OR4PeOJg99"
		const uintV7JbZiq = BigInt("158")
		const OnXFinanceiQmVYO = await OnXFinance.new(stringXKfXaXp, stringoX4OyJC, uintV7JbZiq, {from: accounts[1]});
		const addressn9hrpj = accounts[1]
		const uintGfwmpBk = BigInt("955")
		const addresseTNt7R2 = accounts[2]
		const uint9NhySh = BigInt("1872")
		const addressfLiLtmA = "0x0000000000000000000000000000000000000001"
		const addresssQUueM8 = accounts[3]
		const uintKWLppYG = await OnXFinanceiQmVYO.balanceOf.call(addressn9hrpj, {from: accounts[2]});
		const boolVhYW4tS = await OnXFinanceiQmVYO.approveAndCall.call(addresseTNt7R2, uintGfwmpBk, {from: accounts[1]});
		const booljzWv4I = await OnXFinanceiQmVYO.approveAndCall.call(addressfLiLtmA, uint9NhySh, {from: accounts[2]});
		const uintleFoMW = await OnXFinanceiQmVYO.balanceOf.call(addresssQUueM8, {from: accounts[0]});

		assert.equal(boolVhYW4tS, true)
		assert.equal(uintKWLppYG, BigInt("158000000000000000000"))
		await expect(OnXFinanceiQmVYO.approveAndCall.call(addressfLiLtmA, uint9NhySh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})