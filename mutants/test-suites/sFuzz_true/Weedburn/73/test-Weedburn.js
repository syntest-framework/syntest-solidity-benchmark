const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const stringtojHxo2 = "oIHbnfvUSJoX9NEtKHJUGbNTBe5G"
		const stringuoVAiFm = "IxKQBDd23iv6DngjixYaIIgkdmw5lF6TQFLoaM"
		const uintZ7CsbdV = BigInt("91")
		const WeedburnYysnSJX = await Weedburn.new(stringtojHxo2, stringuoVAiFm, uintZ7CsbdV, {from: accounts[1]});
		const uintLLv5ucX = BigInt("403")
		const uintXCrAY23 = BigInt("752")
		const addressXhPBdI = accounts[2]
		const addressyWRSVi = accounts[2]
		const uint256TcMdF6b = await WeedburnYysnSJX.burn.call(uintLLv5ucX, {from: accounts[4]});
		await WeedburnYysnSJX.enableDevMode.call({from: accounts[1]});
		const boollhyKtnH = await WeedburnYysnSJX.transferFrom.call(addressyWRSVi, addressXhPBdI, uintXCrAY23, {from: accounts[1]});
		const uint256lZMOxEI = await WeedburnYysnSJX.totalSupply.call({from: accounts[4]});
		await WeedburnYysnSJX.enableDevMode.call({from: accounts[2]});
	});

	it('test for Weedburn', async () => {
		const WeedburnxDkRyrG = await Weedburn.new({from: accounts[3]});
		const uintXmEckk4 = BigInt("1367")
		const addressxrdd5Vg = accounts[3]
		const uintoaOT4R = BigInt("1465")
		const addressiUObICo = accounts[0]
		const uintFiXwhpA = BigInt("850")
		const addressNmL0gDk = accounts[5]
		const booldaFzIHV = await WeedburnxDkRyrG.approve.call(addressxrdd5Vg, uintXmEckk4, {from: "0x0000000000000000000000000000000000000001"});
		const uint8p19OjxY = await WeedburnxDkRyrG.decimals.call({from: accounts[1]});
		const boolqVGJc71 = await WeedburnxDkRyrG.increaseAllowance.call(addressiUObICo, uintoaOT4R, {from: accounts[1]});
		const uint256GikG0tN = await WeedburnxDkRyrG.totalSupply.call({from: accounts[2]});
		const boolhmI7KUs = await WeedburnxDkRyrG.transfer.call(addressNmL0gDk, uintFiXwhpA, {from: accounts[3]});

		assert.equal(booldaFzIHV, true)
		assert.equal(boolhmI7KUs, true)
		assert.equal(boolqVGJc71, true)
		assert.equal(uint256GikG0tN, BigInt("100000000000000000000000"))
		assert.equal(uint8p19OjxY, BigInt("18"))
	});

	it('test for Weedburn', async () => {
		const Weedburnifn1RI9 = await Weedburn.new({from: accounts[5]});
		const uint256YR0aj75 = await Weedburnifn1RI9.totalSupply.call({from: accounts[5]});
//		await Weedburnifn1RI9.disableLimitMode.call({from: accounts[4]});

		assert.equal(uint256YR0aj75, BigInt("100000000000000000000000"))
		await expect(Weedburnifn1RI9.disableLimitMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnzOXm0Lq = await Weedburn.new({from: accounts[1]});
		const uintAi0nkHN = BigInt("1018")
		const addressDzxO6Nv = accounts[0]
		const uintMnJibXj = BigInt("1282")
		const addressOg5u7dG = accounts[4]
//		const addressFvkVPHr = await WeedburnzOXm0Lq.burnFrom.call(addressDzxO6Nv, uintAi0nkHN, {from: accounts[3]});
//		const stringliyAoqX = await WeedburnzOXm0Lq.name.call({from: accounts[2]});
//		const boolJze7slQ = await WeedburnzOXm0Lq.decreaseAllowance.call(addressOg5u7dG, uintMnJibXj, {from: accounts[3]});

		await expect(WeedburnzOXm0Lq.burnFrom.call(addressDzxO6Nv, uintAi0nkHN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburna7wawiI = await Weedburn.new({from: accounts[1]});
		const uintSKTgc3P = BigInt("407")
		const addresstZSJHbM = accounts[2]
		const uintNlrtpt = BigInt("1957")
		const addressBzQWsRz = accounts[5]
		const uintYSkaKT = BigInt("553")
		const addressOKHJTQt = accounts[4]
//		const boolyIprOFZ = await Weedburna7wawiI.decreaseAllowance.call(addresstZSJHbM, uintSKTgc3P, {from: accounts[0]});
//		const booltcEl5z = await Weedburna7wawiI.approve.call(addressBzQWsRz, uintNlrtpt, {from: accounts[5]});
//		const boolemR8Slf = await Weedburna7wawiI.increaseAllowance.call(addressOKHJTQt, uintYSkaKT, {from: accounts[4]});

		await expect(Weedburna7wawiI.decreaseAllowance.call(addresstZSJHbM, uintSKTgc3P, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnycL4kQE = await Weedburn.new({from: accounts[1]});
		const uintppQMZrA = BigInt("791")
		const addressYwgaPn = accounts[4]
		const addresskBkIoQs = accounts[2]
		const addressCdM10gW = accounts[0]
		const boolLMCM3a2 = await WeedburnycL4kQE.increaseAllowance.call(addressYwgaPn, uintppQMZrA, {from: accounts[1]});
		const uint256NeTRqkp = await WeedburnycL4kQE.allowance.call(addressCdM10gW, addresskBkIoQs, {from: accounts[0]});

		assert.equal(boolLMCM3a2, true)
		assert.equal(uint256NeTRqkp, BigInt("0"))
	});

	it('test for Weedburn', async () => {
		const Weedburnifn1RI9 = await Weedburn.new({from: accounts[5]});
		const addressYWi9zSA = accounts[3]
		const addressl7H3Yk = accounts[5]
		const uintS7pZC0B = BigInt("789")
		const addressRr5yEmX = accounts[0]
		const uint256YR0aj75 = await Weedburnifn1RI9.totalSupply.call({from: accounts[5]});
		const uint256B3mQUKN = await Weedburnifn1RI9.allowance.call(addressl7H3Yk, addressYWi9zSA, {from: accounts[0]});
//		await Weedburnifn1RI9.disableDevMode.call({from: accounts[4]});
//		await Weedburnifn1RI9.disableLimitMode.call({from: accounts[4]});
//		const boolqp0s2qx = await Weedburnifn1RI9.decreaseAllowance.call(addressRr5yEmX, uintS7pZC0B, {from: accounts[3]});

		assert.equal(uint256B3mQUKN, BigInt("0"))
		assert.equal(uint256YR0aj75, BigInt("100000000000000000000000"))
		await expect(Weedburnifn1RI9.disableDevMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnTEDBP5g = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const uint256NtEsrT0 = await WeedburnTEDBP5g.totalSupply.call({from: accounts[4]});
		const uint8Vi4jagN = await WeedburnTEDBP5g.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const stringPt4WIR7 = await WeedburnTEDBP5g.symbol.call({from: accounts[1]});
	});

	it('test for Weedburn', async () => {
		const WeedburnzOXm0Lq = await Weedburn.new({from: accounts[1]});
		const uintzaRhV6v = BigInt("1282")
		const addressF8Cj8qN = accounts[4]
		const stringliyAoqX = await WeedburnzOXm0Lq.name.call({from: accounts[2]});
//		const boolJze7slQ = await WeedburnzOXm0Lq.decreaseAllowance.call(addressF8Cj8qN, uintzaRhV6v, {from: accounts[3]});

		assert.equal(stringliyAoqX, "t.me/burnweed1")
		await expect(WeedburnzOXm0Lq.decreaseAllowance.call(addressF8Cj8qN, uintzaRhV6v, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnifn1RI9 = await Weedburn.new({from: accounts[5]});
		const uintfEGkkeB = BigInt("1983")
		const addressqW1uNjF = accounts[5]
		const addressPFng2u8 = accounts[3]
		const uint256YR0aj75 = await Weedburnifn1RI9.totalSupply.call({from: accounts[5]});
//		const boolsJNzhLB = await Weedburnifn1RI9.transferFrom.call(addressPFng2u8, addressqW1uNjF, uintfEGkkeB, {from: accounts[2]});
//		const stringpySg3x3 = await Weedburnifn1RI9.symbol.call({from: accounts[3]});

		assert.equal(uint256YR0aj75, BigInt("100000000000000000000000"))
		await expect(Weedburnifn1RI9.transferFrom.call(addressPFng2u8, addressqW1uNjF, uintfEGkkeB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnzOXm0Lq = await Weedburn.new({from: accounts[1]});
		const uintS6SjeE9 = BigInt("1018")
		const addressnW40RsH = accounts[0]
		const uintjJhkpOo = BigInt("1282")
		const addressMj79boA = accounts[4]
//		await WeedburnzOXm0Lq.enableDevMode.call({from: accounts[0]});
//		await WeedburnzOXm0Lq.disableLimitMode.call({from: accounts[1]});
//		await WeedburnzOXm0Lq.disableLimitMode.call({from: accounts[2]});
//		const addressFvkVPHr = await WeedburnzOXm0Lq.burnFrom.call(addressnW40RsH, uintS6SjeE9, {from: accounts[3]});
//		const boolJze7slQ = await WeedburnzOXm0Lq.decreaseAllowance.call(addressMj79boA, uintjJhkpOo, {from: accounts[3]});

		await expect(WeedburnzOXm0Lq.enableDevMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnifn1RI9 = await Weedburn.new({from: accounts[5]});
		const uint256YR0aj75 = await Weedburnifn1RI9.totalSupply.call({from: accounts[5]});
		const stringrTr0PnP = await Weedburnifn1RI9.symbol.call({from: accounts[5]});

		assert.equal(stringrTr0PnP, "Weedburn")
		assert.equal(uint256YR0aj75, BigInt("100000000000000000000000"))
	});

	it('test for Weedburn', async () => {
		const Weedburnifn1RI9 = await Weedburn.new({from: accounts[5]});
		const addressGYFPf5T = accounts[3]
		const uintz8dBPhJ = BigInt("1996")
		const addressmfOj1F3 = accounts[3]
		const uint256YR0aj75 = await Weedburnifn1RI9.totalSupply.call({from: accounts[5]});
		const uint256SN8jClu = await Weedburnifn1RI9.balanceOf.call(addressGYFPf5T, {from: accounts[2]});
//		const boolVpvXI89 = await Weedburnifn1RI9.decreaseAllowance.call(addressmfOj1F3, uintz8dBPhJ, {from: accounts[0]});

		assert.equal(uint256SN8jClu, BigInt("0"))
		assert.equal(uint256YR0aj75, BigInt("100000000000000000000000"))
		await expect(Weedburnifn1RI9.decreaseAllowance.call(addressmfOj1F3, uintz8dBPhJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnzOXm0Lq = await Weedburn.new({from: accounts[1]});
		const uintYssTzgD = BigInt("588")
		const addressyOo10L8 = accounts[1]
		const addresszdoozIK = accounts[1]
		const addressMzUKvfg = accounts[1]
		const addressBjzXgT4 = accounts[1]
		const uintWRwp06T = BigInt("1018")
		const addressI3zd7OT = accounts[0]
		const uintqcHN6Z = BigInt("1611")
		const addressjAaQoT4 = "0x0000000000000000000000000000000000000001"
//		const boolgYR08BL = await WeedburnzOXm0Lq.transferFrom.call(addresszdoozIK, addressyOo10L8, uintYssTzgD, {from: accounts[1]});
//		const uint256Ss9FMWO = await WeedburnzOXm0Lq.allowance.call(addressBjzXgT4, addressMzUKvfg, {from: accounts[1]});
//		const stringyPQgXX = await WeedburnzOXm0Lq.symbol.call({from: accounts[1]});
//		const addressFvkVPHr = await WeedburnzOXm0Lq.burnFrom.call(addressI3zd7OT, uintWRwp06T, {from: accounts[3]});
//		const booldCx2l7q = await WeedburnzOXm0Lq.increaseAllowance.call(addressjAaQoT4, uintqcHN6Z, {from: accounts[0]});

		await expect(WeedburnzOXm0Lq.transferFrom.call(addresszdoozIK, addressyOo10L8, uintYssTzgD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnzOXm0Lq = await Weedburn.new({from: accounts[1]});
		const uintecoexdn = BigInt("1018")
		const addresshJF049t = accounts[0]
//		await WeedburnzOXm0Lq.enableLimitMode.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressFvkVPHr = await WeedburnzOXm0Lq.burnFrom.call(addresshJF049t, uintecoexdn, {from: accounts[3]});

		await expect(WeedburnzOXm0Lq.enableLimitMode.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnzOXm0Lq = await Weedburn.new({from: accounts[1]});
		const uintydKMvsL = BigInt("1094")
		const uintThPuGZ1 = BigInt("1012")
		const addressFoNuRlH = accounts[0]
		const uint256yBTSOG2 = await WeedburnzOXm0Lq.burn.call(uintydKMvsL, {from: accounts[1]});
		const uint256YDm1VSB = await WeedburnzOXm0Lq.totalSupply.call({from: accounts[0]});
//		const addressFvkVPHr = await WeedburnzOXm0Lq.burnFrom.call(addressFoNuRlH, uintThPuGZ1, {from: accounts[3]});

		assert.equal(uint256YDm1VSB, BigInt("100000000000000000000000"))
		await expect(WeedburnzOXm0Lq.burnFrom.call(addressFoNuRlH, uintThPuGZ1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})