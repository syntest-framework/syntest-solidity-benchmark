const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractQS3TBAa = await VBZRXWrapper.new({from: accounts[0]});
		const valueFCQ3tgc = BigInt("489")
		const dst8HpuAc = "0x0000000000000000000000000000000000000001"
		const valuerw29W2i = BigInt("330")
		const dstqN73Okj = accounts[1]
		const srcAPhAVLj = "0x0000000000000000000000000000000000000001"
		const nullzzU1DD = await contractQS3TBAa.transfer.call(dst8HpuAc, valueFCQ3tgc, {from: accounts[1]});
		const nullmGqdMwj = await contractQS3TBAa.transferFrom.call(srcAPhAVLj, dstqN73Okj, valuerw29W2i, {from: accounts[3]});
		const nullGSTkKmP = await contractQS3TBAa.claim.call({from: accounts[2]});
		const nullzlgjaJu = await contractQS3TBAa.claim.call({from: accounts[4]});

		await expect(contractQS3TBAa.transfer.call(dst8HpuAc, valueFCQ3tgc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractAWU29yw = await VBZRXWrapper.new({from: accounts[5]});
		const valueC431y0 = BigInt("336")
		const dstbAJPQG = accounts[2]
		const srcD6Qvdyp = "0x0000000000000000000000000000000000000001"
		const valueu0hEwPJ = BigInt("1041")
		const valueWFpSJnB = BigInt("1046")
		const dstTC4CxNH = accounts[0]
		const valueDF1GG6D = BigInt("299")
		const dstLm9G7lI = accounts[3]
		const src1OoUbp = accounts[2]
		await contractAWU29yw.exit.call({from: accounts[2]});
		const nulltBDZA3D = await contractAWU29yw.transferFrom.call(srcD6Qvdyp, dstbAJPQG, valueC431y0, {from: accounts[4]});
		await contractAWU29yw.withdraw.call(valueu0hEwPJ, {from: accounts[4]});
		await contractAWU29yw.exit.call({from: accounts[3]});
		const nulldytV3y = await contractAWU29yw.transfer.call(dstTC4CxNH, valueWFpSJnB, {from: accounts[3]});
		const nullzLrLOJW = await contractAWU29yw.transferFrom.call(src1OoUbp, dstLm9G7lI, valueDF1GG6D, {from: accounts[2]});

		await expect(contractAWU29yw.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contracty0zIwAO = await VBZRXWrapper.new({from: accounts[4]});
		const valuefC1csGj = BigInt("862")
		const valueW0kk4Cp = BigInt("1073")
		const valueMGwvZ5h = BigInt("683")
		const valuePoUKItu = BigInt("1560")
		await contracty0zIwAO.deposit.call(valuefC1csGj, {from: accounts[2]});
		await contracty0zIwAO.withdraw.call(valueW0kk4Cp, {from: accounts[2]});
		await contracty0zIwAO.deposit.call(valueMGwvZ5h, {from: accounts[2]});
		const nullTGX8Mrd = await contracty0zIwAO.claim.call({from: accounts[1]});
		await contracty0zIwAO.withdraw.call(valuePoUKItu, {from: accounts[4]});

		await expect(contracty0zIwAO.deposit.call(valuefC1csGj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractZT3p4uo = await VBZRXWrapper.new({from: accounts[4]});
		const valueKNhgt6v = BigInt("1573")
		const spenderGfSvbvY = "0x0000000000000000000000000000000000000001"
		const valuefCNaFne = BigInt("3")
		const valueYVWlVnC = BigInt("301")
		const dstitLiIVI = accounts[4]
		const nulleehqY24 = await contractZT3p4uo.claim.call({from: accounts[3]});
		const nullrXscdlD = await contractZT3p4uo.approve.call(spenderGfSvbvY, valueKNhgt6v, {from: accounts[4]});
		await contractZT3p4uo.deposit.call(valuefCNaFne, {from: accounts[5]});
		const nullK4HHbVW = await contractZT3p4uo.transfer.call(dstitLiIVI, valueYVWlVnC, {from: accounts[1]});
		const nullhBfP4E = await contractZT3p4uo.claim.call({from: accounts[4]});

		assert.equal(nulleehqY24, 0)
		assert.equal(nullrXscdlD, true)
		await expect(contractZT3p4uo.deposit.call(valuefCNaFne, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractQpaetjY = await VBZRXWrapper.new({from: accounts[1]});
		const accounttw5LdQu = accounts[3]
		const valueeIqctPP = BigInt("164")
		const spenderQjhYfOy = accounts[3]
		const valueNOf2xRy = BigInt("1296")
		const dsthoUmDZG = accounts[0]
		const srcASFc0as = accounts[4]
		const nullU3eduDT = await contractQpaetjY.claimable.call(accounttw5LdQu, {from: accounts[4]});
		const nullcNzzL8z = await contractQpaetjY.approve.call(spenderQjhYfOy, valueeIqctPP, {from: accounts[1]});
		const null6Pb9vB = await contractQpaetjY.transferFrom.call(srcASFc0as, dsthoUmDZG, valueNOf2xRy, {from: accounts[1]});

		await expect(contractQpaetjY.claimable.call(accounttw5LdQu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractP6fBhYw = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const valueIWCNeir = BigInt("1497")
		const dstcQRsUlx = accounts[0]
		const accountby4jaPE = accounts[2]
		const valueHijx4Oi = BigInt("143")
		const spenderCLsWgsJ = accounts[5]
		const valuehwpRqBt = BigInt("1648")
		const dstT6N0uCE = accounts[2]
		const valuemkXrpMm = BigInt("1197")
		const dstjoH3VUI = accounts[4]
		await contractP6fBhYw.exit.call({from: accounts[0]});
		const nullOoZ9FXa = await contractP6fBhYw.transfer.call(dstcQRsUlx, valueIWCNeir, {from: accounts[4]});
		const nullY59RFQS = await contractP6fBhYw.claimable.call(accountby4jaPE, {from: accounts[3]});
		const nullqz9kRWq = await contractP6fBhYw.approve.call(spenderCLsWgsJ, valueHijx4Oi, {from: accounts[3]});
		const nullA3Fcml0 = await contractP6fBhYw.transfer.call(dstT6N0uCE, valuehwpRqBt, {from: accounts[4]});
		const nullcOClObl = await contractP6fBhYw.transfer.call(dstjoH3VUI, valuemkXrpMm, {from: accounts[1]});
	});
})