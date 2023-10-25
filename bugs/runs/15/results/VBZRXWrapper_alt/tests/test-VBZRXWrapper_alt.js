const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractjeMvZje = await VBZRXWrapper_alt.new({from: accounts[2]});
		const valueD9Y27EL = BigInt("303")
		const valueynN5vdX = BigInt("139")
		await contractjeMvZje.deposit.call(valueD9Y27EL, {from: accounts[0]});
		await contractjeMvZje.deposit.call(valueynN5vdX, {from: accounts[4]});
		const nullLDK7Oxa = await contractjeMvZje.claim.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(contractjeMvZje.deposit.call(valueD9Y27EL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractkF6zepW = await VBZRXWrapper_alt.new({from: accounts[2]});
		const valueoWbbAfz = BigInt("617")
		const valuea8rFPhP = BigInt("1806")
		const dsttF2Sz4i = accounts[0]
		const srcQrIbNUZ = "0x0000000000000000000000000000000000000001"
		const valueNLzzdlY = BigInt("1153")
		const valueVuGgeB4 = BigInt("2")
		const dstjmI6tTV = accounts[2]
		const srcYXbGqJX = accounts[0]
		const valueIjCAmIa = BigInt("549")
		const dstbQP02dr = "0x0000000000000000000000000000000000000001"
		await contractkF6zepW.withdraw.call(valueoWbbAfz, {from: "0x0000000000000000000000000000000000000001"});
		const nullDtHgfgl = await contractkF6zepW.transferFrom.call(srcQrIbNUZ, dsttF2Sz4i, valuea8rFPhP, {from: accounts[5]});
		await contractkF6zepW.deposit.call(valueNLzzdlY, {from: accounts[0]});
		const nullQMYsfmt = await contractkF6zepW.transferFrom.call(srcYXbGqJX, dstjmI6tTV, valueVuGgeB4, {from: accounts[2]});
		const nullzjWaXYy = await contractkF6zepW.transfer.call(dstbQP02dr, valueIjCAmIa, {from: accounts[0]});

		await expect(contractkF6zepW.withdraw.call(valueoWbbAfz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractm4QBcKp = await VBZRXWrapper_alt.new({from: accounts[1]});
		const valueEhGJm3A = BigInt("1056")
		const dstrWu5Wpx = accounts[4]
		const valueQamfNA5 = BigInt("1189")
		const dstKlY4uKm = accounts[3]
		const srcBQYEy9r = accounts[1]
		const valueGKTpx4m = BigInt("850")
		const dstM3cas8I = accounts[4]
		const srcz9Dk5Ya = accounts[3]
		const valuecrMyTiC = BigInt("544")
		const dstYIHOxQd = accounts[4]
		const srcfCBUEqR = accounts[0]
		const nullYr2Buf = await contractm4QBcKp.transfer.call(dstrWu5Wpx, valueEhGJm3A, {from: accounts[0]});
		const nullIRezXuI = await contractm4QBcKp.transferFrom.call(srcBQYEy9r, dstKlY4uKm, valueQamfNA5, {from: accounts[1]});
		const nullvUaDRzw = await contractm4QBcKp.transferFrom.call(srcz9Dk5Ya, dstM3cas8I, valueGKTpx4m, {from: accounts[4]});
		const nullMX5rcyL = await contractm4QBcKp.transferFrom.call(srcfCBUEqR, dstYIHOxQd, valuecrMyTiC, {from: accounts[4]});
		await contractm4QBcKp.exit.call({from: accounts[3]});
		await contractm4QBcKp.exit.call({from: accounts[1]});

		await expect(contractm4QBcKp.transfer.call(dstrWu5Wpx, valueEhGJm3A, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractDDsPVL = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valuetHBY2Nv = BigInt("476")
		const valuelZ3CeTR = BigInt("710")
		const valuenXtWoNW = BigInt("359")
		const dstfHVxzQG = accounts[2]
		await contractDDsPVL.exit.call({from: accounts[2]});
		await contractDDsPVL.withdraw.call(valuetHBY2Nv, {from: accounts[4]});
		await contractDDsPVL.withdraw.call(valuelZ3CeTR, {from: accounts[2]});
		await contractDDsPVL.exit.call({from: accounts[5]});
		const nullRzt09ub = await contractDDsPVL.claim.call({from: accounts[3]});
		const nullxmbWtT = await contractDDsPVL.transfer.call(dstfHVxzQG, valuenXtWoNW, {from: accounts[2]});

		await expect(contractDDsPVL.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractUbrZJN7 = await VBZRXWrapper_alt.new({from: accounts[0]});
		const valueMj58BMd = BigInt("1721")
		const spenderMnna7ZT = accounts[3]
		const valueaWjtBzn = BigInt("1703")
		const valueTNfhA5F = BigInt("725")
		const spenderz7L94QY = accounts[2]
		const nullvsXmdn9 = await contractUbrZJN7.approve.call(spenderMnna7ZT, valueMj58BMd, {from: accounts[1]});
		await contractUbrZJN7.withdraw.call(valueaWjtBzn, {from: accounts[4]});
		const nullmnO6hcB = await contractUbrZJN7.approve.call(spenderz7L94QY, valueTNfhA5F, {from: accounts[2]});

		assert.equal(nullvsXmdn9, true)
		await expect(contractUbrZJN7.withdraw.call(valueaWjtBzn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contracttSJyyIb = await VBZRXWrapper_alt.new({from: accounts[2]});
		const valuexCL8jXo = BigInt("303")
		const valueIRO0ZOt = BigInt("139")
		const toggleNpdRPOH = true
		const addrKCXysm2 = accounts[3]
		const nullyjCSC01 = await contracttSJyyIb.claim.call({from: accounts[0]});
		await contracttSJyyIb.deposit.call(valuexCL8jXo, {from: accounts[0]});
		await contracttSJyyIb.deposit.call(valueIRO0ZOt, {from: accounts[4]});
		const nullSRY5XqO = await contracttSJyyIb.claim.call({from: "0x0000000000000000000000000000000000000001"});
		await contracttSJyyIb.setBridge.call(addrKCXysm2, toggleNpdRPOH, {from: accounts[4]});

		assert.equal(nullyjCSC01, 0)
		await expect(contracttSJyyIb.deposit.call(valuexCL8jXo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractEnZzBhU = await VBZRXWrapper_alt.new({from: accounts[5]});
		const valueITh6i0P = BigInt("1780")
		const spenderZTismOQ = accounts[2]
		const toggledAK2XBp = true
		const addrjEAm1kJ = accounts[1]
		const valueT59nBVg = BigInt("624")
		const nullREH0WKd = await contractEnZzBhU.approve.call(spenderZTismOQ, valueITh6i0P, {from: accounts[2]});
		await contractEnZzBhU.setBridge.call(addrjEAm1kJ, toggledAK2XBp, {from: accounts[0]});
		await contractEnZzBhU.exit.call({from: accounts[0]});
		await contractEnZzBhU.deposit.call(valueT59nBVg, {from: accounts[0]});

		assert.equal(nullREH0WKd, true)
		await expect(contractEnZzBhU.setBridge.call(addrjEAm1kJ, toggledAK2XBp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractlkTkkOg = await VBZRXWrapper_alt.new({from: accounts[0]});
		const valuegDn2LY = BigInt("1721")
		const spenderv2JWv3 = accounts[3]
		const accountKnTGnZ = accounts[1]
		const valueu2Nucx0 = BigInt("1713")
		const valuencRoYnv = BigInt("851")
		const dstZM2ZYG = accounts[4]
		const srcv4VQu1w = accounts[0]
		const null0XbBPw = await contractlkTkkOg.approve.call(spenderv2JWv3, valuegDn2LY, {from: accounts[1]});
		const nullqITOtMA = await contractlkTkkOg.claimable.call(accountKnTGnZ, {from: "0x0000000000000000000000000000000000000001"});
		await contractlkTkkOg.withdraw.call(valueu2Nucx0, {from: accounts[4]});
		const nullsPhIjcI = await contractlkTkkOg.transferFrom.call(srcv4VQu1w, dstZM2ZYG, valuencRoYnv, {from: accounts[1]});

		assert.equal(null0XbBPw, true)
		assert.equal(nullqITOtMA, 0)
		await expect(contractlkTkkOg.withdraw.call(valueu2Nucx0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractlFBM1d8 = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const toggleCeXISql = true
		const addrczBS5JL = accounts[1]
		const valueIWTbkyj = BigInt("1894")
		const dstPMoNf4r = accounts[2]
		const valueXgfbToR = BigInt("409")
		const dsthIJzmN9 = accounts[4]
		const srcKfAaFwy = accounts[3]
		await contractlFBM1d8.setBridge.call(addrczBS5JL, toggleCeXISql, {from: accounts[3]});
		await contractlFBM1d8.exit.call({from: accounts[5]});
		const nullTZCq0RO = await contractlFBM1d8.transfer.call(dstPMoNf4r, valueIWTbkyj, {from: accounts[0]});
		const nullotnSnyT = await contractlFBM1d8.transferFrom.call(srcKfAaFwy, dsthIJzmN9, valueXgfbToR, {from: accounts[0]});
		const nullWdpMCG7 = await contractlFBM1d8.claim.call({from: accounts[1]});
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractqsMvcj = await VBZRXWrapper_alt.new({from: accounts[0]});
		const toggle5BjQGQ = false
		const addrrn9FxgJ = accounts[1]
		const valuepXVnKbG = BigInt("1680")
		await contractqsMvcj.setBridge.call(addrrn9FxgJ, toggle5BjQGQ, {from: accounts[0]});
		const nullOgYvoX = await contractqsMvcj.claim.call({from: accounts[1]});
		await contractqsMvcj.withdraw.call(valuepXVnKbG, {from: accounts[4]});
		await contractqsMvcj.exit.call({from: accounts[5]});

		assert.equal(nullOgYvoX, 0)
		await expect(contractqsMvcj.claim.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})