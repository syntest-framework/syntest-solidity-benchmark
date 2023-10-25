const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractKCyG0Gd = await ERC20.new({from: accounts[0]});
		const spenderevcgWJr = accounts[3]
		const ownerNAWf5C = accounts[5]
		const addedValueTaQL5A = BigInt("1454")
		const spenderdPafaM6 = "0x0000000000000000000000000000000000000001"
		const valueuyhxM4 = BigInt("1964")
		const todJj9DNq = accounts[3]
		const value7UB1Y9 = BigInt("924")
		const toMhsIPAR = accounts[1]
		const nullbB6is0G = await contractKCyG0Gd.allowance.call(ownerNAWf5C, spenderevcgWJr, {from: accounts[1]});
		const nullMnHuMvu = await contractKCyG0Gd.increaseAllowance.call(spenderdPafaM6, addedValueTaQL5A, {from: accounts[2]});
		const nullmE1Mvgb = await contractKCyG0Gd.transfer.call(todJj9DNq, valueuyhxM4, {from: "0x0000000000000000000000000000000000000001"});
		const nullkfklhwc = await contractKCyG0Gd.transfer.call(toMhsIPAR, value7UB1Y9, {from: accounts[5]});

		assert.equal(nullMnHuMvu, true)
		assert.equal(nullbB6is0G, 0)
		await expect(contractKCyG0Gd.transfer.call(todJj9DNq, valueuyhxM4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractqYISzkX = await ERC20.new({from: accounts[2]});
		const spenderymNETA = accounts[3]
		const ownerJJg8kw = accounts[2]
		const subtractedValueSKCGI4b = BigInt("2021")
		const spenderna71JwT = accounts[3]
		const valueyr9n0e1 = BigInt("1378")
		const toNfLc2Ba = "0x0000000000000000000000000000000000000001"
		const spenderkrA68WD = "0x0000000000000000000000000000000000000001"
		const ownerlvT9Qf5 = accounts[3]
		const valueHvAmya8 = BigInt("1882")
		const spenderE7ptV7 = "0x0000000000000000000000000000000000000001"
		const nullDerq0yp = await contractqYISzkX.allowance.call(ownerJJg8kw, spenderymNETA, {from: accounts[4]});
		const null89DluZ = await contractqYISzkX.decreaseAllowance.call(spenderna71JwT, subtractedValueSKCGI4b, {from: accounts[0]});
		const nullbLvFwR5 = await contractqYISzkX.transfer.call(toNfLc2Ba, valueyr9n0e1, {from: accounts[1]});
		const nullTADHp3v = await contractqYISzkX.allowance.call(ownerlvT9Qf5, spenderkrA68WD, {from: accounts[3]});
		const nullq5aZSu = await contractqYISzkX.approve.call(spenderE7ptV7, valueHvAmya8, {from: accounts[1]});

		assert.equal(nullDerq0yp, 0)
		await expect(contractqYISzkX.decreaseAllowance.call(spenderna71JwT, subtractedValueSKCGI4b, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractNtFNYEi = await ERC20.new({from: accounts[5]});
		const owner04r7VU = accounts[3]
		const valueGSup3EZ = BigInt("27")
		const tosaQy3Uv = accounts[3]
		const spenderrsUfUIf = accounts[4]
		const ownerY0OGRYo = accounts[4]
		const nullyMQuHoK = await contractNtFNYEi.balanceOf.call(owner04r7VU, {from: accounts[4]});
		const nullBjR57zJ = await contractNtFNYEi.transfer.call(tosaQy3Uv, valueGSup3EZ, {from: accounts[2]});
		const nullKSvZVMk = await contractNtFNYEi.allowance.call(ownerY0OGRYo, spenderrsUfUIf, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullyMQuHoK, 0)
		await expect(contractNtFNYEi.transfer.call(tosaQy3Uv, valueGSup3EZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractgr3rRLb = await ERC20.new({from: accounts[1]});
		const addedValueCpb7j9l = BigInt("1216")
		const spenderbmpHlC = accounts[3]
		const subtractedValuekjjtZf = BigInt("2042")
		const spenderan8H0z = accounts[1]
		const valueEkgPhwz = BigInt("14")
		const spenderMDL58Fs = accounts[0]
		const addedValueTz5izyP = BigInt("2021")
		const spenderFTAK0So = accounts[0]
		const valueoKp3kBl = BigInt("1932")
		const spenderjBeDzhs = accounts[3]
		const nullCENTMbY = await contractgr3rRLb.totalSupply.call({from: accounts[5]});
		const nullRHtGTV4 = await contractgr3rRLb.increaseAllowance.call(spenderbmpHlC, addedValueCpb7j9l, {from: accounts[4]});
		const nullsVfVlx9 = await contractgr3rRLb.decreaseAllowance.call(spenderan8H0z, subtractedValuekjjtZf, {from: accounts[3]});
		const nullvSzVtbh = await contractgr3rRLb.approve.call(spenderMDL58Fs, valueEkgPhwz, {from: accounts[1]});
		const nullmfLICIv = await contractgr3rRLb.increaseAllowance.call(spenderFTAK0So, addedValueTz5izyP, {from: accounts[2]});
		const nullA8DpGh = await contractgr3rRLb.approve.call(spenderjBeDzhs, valueoKp3kBl, {from: accounts[0]});

		assert.equal(nullCENTMbY, 0)
		assert.equal(nullRHtGTV4, true)
		await expect(contractgr3rRLb.decreaseAllowance.call(spenderan8H0z, subtractedValuekjjtZf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractPidFKxO = await ERC20.new({from: accounts[1]});
		const spenderhe6vIoT = accounts[0]
		const ownerY9hqM2G = accounts[2]
		const valueCkRa1ND = BigInt("1602")
		const too8w2st8 = "0x0000000000000000000000000000000000000001"
		const fromOPNxpjW = accounts[3]
		const nullv1qQMSv = await contractPidFKxO.allowance.call(ownerY9hqM2G, spenderhe6vIoT, {from: accounts[1]});
		const nullSSLIrU6 = await contractPidFKxO.transferFrom.call(fromOPNxpjW, too8w2st8, valueCkRa1ND, {from: accounts[1]});

		assert.equal(nullv1qQMSv, 0)
		await expect(contractPidFKxO.transferFrom.call(fromOPNxpjW, too8w2st8, valueCkRa1ND, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractskqxKIG = await ERC20.new({from: accounts[0]});
		const valueprob2pg = BigInt("1794")
		const spenderdsLGnZ4 = accounts[0]
		const valueNOQ9qs = BigInt("2019")
		const toB1cVRhf = accounts[0]
		const fromlMzgxEH = accounts[4]
		const valueuJTU0kC = BigInt("1036")
		const spenderi808Jty = accounts[4]
		const subtractedValueFXD0HAq = BigInt("307")
		const spenderuDnFwe = "0x0000000000000000000000000000000000000001"
		const nullPOA8PxJ = await contractskqxKIG.totalSupply.call({from: accounts[2]});
		const null5yy1QF = await contractskqxKIG.approve.call(spenderdsLGnZ4, valueprob2pg, {from: accounts[4]});
		const nullXbeM6iN = await contractskqxKIG.transferFrom.call(fromlMzgxEH, toB1cVRhf, valueNOQ9qs, {from: accounts[4]});
		const null8gL2ek = await contractskqxKIG.approve.call(spenderi808Jty, valueuJTU0kC, {from: accounts[4]});
		const nullCfVSieA = await contractskqxKIG.decreaseAllowance.call(spenderuDnFwe, subtractedValueFXD0HAq, {from: accounts[4]});

		assert.equal(null5yy1QF, true)
		assert.equal(nullPOA8PxJ, 0)
		await expect(contractskqxKIG.transferFrom.call(fromlMzgxEH, toB1cVRhf, valueNOQ9qs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractN95D7C4 = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const spender1Y8Sj2 = accounts[3]
		const ownerrpdqF6c = accounts[2]
		const addedValuevZrDEyJ = BigInt("1942")
		const spenderiqA2OK6 = accounts[1]
		const valuegEP1KxH = BigInt("1954")
		const toDRIOHsQ = "0x0000000000000000000000000000000000000001"
		const fromJXRyIl = "0x0000000000000000000000000000000000000001"
		const ownereDPQNpI = accounts[5]
		const valueojOdG2 = BigInt("747")
		const tooFf7XT = "0x0000000000000000000000000000000000000001"
		const addedValueqUTrZxc = BigInt("1818")
		const spenderDyoYAmm = accounts[1]
		const nullG0du8GN = await contractN95D7C4.allowance.call(ownerrpdqF6c, spender1Y8Sj2, {from: accounts[4]});
		const nullGFxqrA7 = await contractN95D7C4.increaseAllowance.call(spenderiqA2OK6, addedValuevZrDEyJ, {from: accounts[1]});
		const nullpn1Y2Vi = await contractN95D7C4.transferFrom.call(fromJXRyIl, toDRIOHsQ, valuegEP1KxH, {from: accounts[1]});
		const nulliqJQ45q = await contractN95D7C4.balanceOf.call(ownereDPQNpI, {from: accounts[3]});
		const nullxgEsks = await contractN95D7C4.transfer.call(tooFf7XT, valueojOdG2, {from: accounts[2]});
		const nullja0xRi = await contractN95D7C4.increaseAllowance.call(spenderDyoYAmm, addedValueqUTrZxc, {from: accounts[3]});
	});
})