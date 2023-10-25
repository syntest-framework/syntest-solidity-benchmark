const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentssGVTK4Q = await UFragments.new({from: accounts[4]});
		const uintiEn7jlU = BigInt("1191")
		const addressohzPAum = accounts[3]
		const addressy8V7T4W = accounts[4]
		const addressRQ8qZxw = accounts[3]
		const boolkGUnuYi = await UFragmentssGVTK4Q.isOwner.call({from: accounts[3]});
		const boolornD4y = await UFragmentssGVTK4Q.transferFrom.call(addressy8V7T4W, addressohzPAum, uintiEn7jlU, {from: accounts[3]});
		const addressfPqBgGR = await UFragmentssGVTK4Q.initialize.call(addressRQ8qZxw, {from: accounts[3]});

		assert.equal(boolkGUnuYi, false)
		await expect(UFragmentssGVTK4Q.transferFrom.call(addressy8V7T4W, addressohzPAum, uintiEn7jlU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsIYBHuv = await UFragments.new({from: accounts[5]});
		const uinte4GrLN = BigInt("238")
		const addressCo0gtFu = accounts[3]
		const uintuOWMXLx = BigInt("639")
		const addressOntvosq = accounts[5]
		await UFragmentsIYBHuv.onlyOwner.call({from: accounts[4]});
		const boolbMGvkih = await UFragmentsIYBHuv.transfer.call(addressCo0gtFu, uinte4GrLN, {from: accounts[1]});
		const stringSfqTsSo = await UFragmentsIYBHuv.symbol.call({from: accounts[1]});
		const uint8pNfYkt7 = await UFragmentsIYBHuv.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolwZOdkea = await UFragmentsIYBHuv.transfer.call(addressOntvosq, uintuOWMXLx, {from: accounts[1]});

		await expect(UFragmentsIYBHuv.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsa9GcwZb = await UFragments.new({from: accounts[4]});
		const boolZvqYYMP = await UFragmentsa9GcwZb.rebaseTimeInfo.call({from: accounts[0]});
		const stringn4zwMCN = await UFragmentsa9GcwZb.name.call({from: accounts[3]});
		const uint8E6AqYCo = await UFragmentsa9GcwZb.decimals.call({from: accounts[4]});

		assert.equal(stringn4zwMCN, "")
		assert.equal(uint8E6AqYCo, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsQS0QlU7 = await UFragments.new({from: accounts[1]});
		const addressJbf6jFf = accounts[2]
		const boolyNGUyyg = await UFragmentsQS0QlU7.isOwner.call({from: accounts[5]});
		const addressbLXl0Ks = await UFragmentsQS0QlU7.initialize.call(addressJbf6jFf, {from: accounts[0]});

		assert.equal(boolyNGUyyg, false)
		await expect(UFragmentsQS0QlU7.initialize.call(addressJbf6jFf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsBkiHqB = await UFragments.new({from: accounts[3]});
		const stringgKM5xzV = await UFragmentsBkiHqB.name.call({from: accounts[3]});
		const uint256G4AeSfk = await UFragmentsBkiHqB.totalSupply.call({from: accounts[4]});
		const boolbBzjCnR = await UFragmentsBkiHqB.isOwner.call({from: accounts[3]});

		assert.equal(boolbBzjCnR, false)
		assert.equal(stringgKM5xzV, "")
		assert.equal(uint256G4AeSfk, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsQS0QlU7 = await UFragments.new({from: accounts[1]});
		const uintz3WZTT5 = BigInt("618")
		const addressP7Myyt3 = accounts[3]
		const addressRfj4SSZ = accounts[3]
		const boolyNGUyyg = await UFragmentsQS0QlU7.isOwner.call({from: accounts[5]});
		const boolwBAvpIj = await UFragmentsQS0QlU7.transfer.call(addressP7Myyt3, uintz3WZTT5, {from: accounts[2]});
		const addressbLXl0Ks = await UFragmentsQS0QlU7.initialize.call(addressRfj4SSZ, {from: accounts[0]});

		assert.equal(boolyNGUyyg, false)
		await expect(UFragmentsQS0QlU7.transfer.call(addressP7Myyt3, uintz3WZTT5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsQS0QlU7 = await UFragments.new({from: accounts[1]});
		const uintDoTPKDr = BigInt("618")
		const addressZvugYeq = accounts[3]
		const addressxqnAEfX = accounts[3]
		const boolyNGUyyg = await UFragmentsQS0QlU7.isOwner.call({from: accounts[5]});
		const stringNy6CmGK = await UFragmentsQS0QlU7.symbol.call({from: accounts[3]});
		const boolwBAvpIj = await UFragmentsQS0QlU7.transfer.call(addressZvugYeq, uintDoTPKDr, {from: accounts[2]});
		const addressbLXl0Ks = await UFragmentsQS0QlU7.initialize.call(addressxqnAEfX, {from: accounts[0]});

		assert.equal(boolyNGUyyg, false)
		assert.equal(stringNy6CmGK, "")
		await expect(UFragmentsQS0QlU7.transfer.call(addressZvugYeq, uintDoTPKDr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsr3Ncvf = await UFragments.new({from: accounts[4]});
		const uinty23FZR = BigInt("1095")
		const addressvGSYidy = accounts[4]
		const addressY1Qlucm = accounts[4]
		const uinte4n6Hkx = BigInt("655")
		const addressglLhYTU = accounts[4]
		const uintF1CyzTk = BigInt("190")
		const stringOtcyuSH = "tH3lNb5w5L7ztEvvpWJCW19DMQbIyURS1zuPdfFcpwMoKW534uSmAgNBgsgUlwCbRPaS"
		const stringtex4YZl = "TDqA1gFAsDWRwG3HZeAFsrTdsENvqY5HjokqTDIfznlOzkLIz613tVLJNYwN7dEQN"
		const boolokKoG57 = await UFragmentsr3Ncvf.approve.call(addressvGSYidy, uinty23FZR, {from: accounts[5]});
		const address5ayDzy = await UFragmentsr3Ncvf.transferOwnership.call(addressY1Qlucm, {from: accounts[1]});
		const boollbFPmq6 = await UFragmentsr3Ncvf.transfer.call(addressglLhYTU, uinte4n6Hkx, {from: accounts[2]});
		const uint256UrZebdE = await UFragmentsr3Ncvf.calRebase.call({from: accounts[2]});
		const stringKTeZkAZ = await UFragmentsr3Ncvf.initialize.call(stringtex4YZl, stringOtcyuSH, uintF1CyzTk, {from: accounts[2]});

		assert.equal(boolokKoG57, true)
		await expect(UFragmentsr3Ncvf.transferOwnership.call(addressY1Qlucm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentssGVTK4Q = await UFragments.new({from: accounts[4]});
		const addressgrLerIK = accounts[3]
		const addressnvyqQeq = "0x0000000000000000000000000000000000000001"
		const uintGwocgDa = BigInt("1191")
		const addresswYQBqg6 = accounts[3]
		const addressLvhPwQ = accounts[4]
		const uintgkUnqRR = BigInt("50")
		const addressDCNpczn = accounts[2]
		const address51ck8k = accounts[4]
		const uint256d1lbMQX = await UFragmentssGVTK4Q.allowance.call(addressnvyqQeq, addressgrLerIK, {from: accounts[0]});
		const boolornD4y = await UFragmentssGVTK4Q.transferFrom.call(addressLvhPwQ, addresswYQBqg6, uintGwocgDa, {from: accounts[3]});
		const addressLlsRbHU = await UFragmentssGVTK4Q.initRebase.call(addressDCNpczn, uintgkUnqRR, {from: accounts[2]});
		const addressfPqBgGR = await UFragmentssGVTK4Q.initialize.call(address51ck8k, {from: accounts[3]});

		assert.equal(uint256d1lbMQX, BigInt("0"))
		await expect(UFragmentssGVTK4Q.transferFrom.call(addressLvhPwQ, addresswYQBqg6, uintGwocgDa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsQS0QlU7 = await UFragments.new({from: accounts[1]});
		const addressV4H0uCp = accounts[3]
		const intAOOgny7 = BigInt("998")
		const addressiJHe5YS = await UFragmentsQS0QlU7.owner.call({from: accounts[4]});
		const addressbLXl0Ks = await UFragmentsQS0QlU7.initialize.call(addressV4H0uCp, {from: accounts[0]});
		const int256XO7BeWS = await UFragmentsQS0QlU7.abs.call(intAOOgny7, {from: accounts[1]});

		assert.equal(addressiJHe5YS, 0x0000000000000000000000000000000000000000)
		await expect(UFragmentsQS0QlU7.initialize.call(addressV4H0uCp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsUxeUmxB = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const intmclmngm = BigInt("1463")
		const intwpVwLTf = BigInt("453")
		const uintxFqPqGx = BigInt("410")
		const addressNZdCmEQ = accounts[5]
		const intxJ6RHOK = BigInt("1059")
		const intvzN2aw = BigInt("-1164")
		const addressWUE9wU = accounts[4]
		const int256gY61UAs = await UFragmentsUxeUmxB.sub.call(intwpVwLTf, intmclmngm, {from: "0x0000000000000000000000000000000000000001"});
		const boolyECFsbh = await UFragmentsUxeUmxB.transfer.call(addressNZdCmEQ, uintxFqPqGx, {from: accounts[3]});
		const uint256PDM1G69 = await UFragmentsUxeUmxB.totalSupply.call({from: accounts[5]});
		const int256aFOzrtl = await UFragmentsUxeUmxB.add.call(intvzN2aw, intxJ6RHOK, {from: accounts[2]});
		const addressezrVtGC = await UFragmentsUxeUmxB.initialize.call(addressWUE9wU, {from: "0x0000000000000000000000000000000000000001"});
		const stringb4R6ne1 = await UFragmentsUxeUmxB.symbol.call({from: accounts[0]});
	});

	it('test for UFragments', async () => {
		const UFragmentsQS0QlU7 = await UFragments.new({from: accounts[1]});
		const uintbMl4mn = BigInt("224")
		const stringjeuz6o6 = "xiZrFnPP8MPLOBmdXWK2"
		const stringxhtFEL5 = "RtSq5S9pyOQr9iFR3HxGaLtF5q7Jq1w8fEaQYXMLRf5IqNBtndy4TvKfYxbacCtVfGT9BODFt"
		const addressWNs2HBK = accounts[2]
		const uintY4cL0hT = BigInt("1749")
		const addresszufWJH = accounts[3]
		const boolfDjgh0o = await UFragmentsQS0QlU7.isOwner.call({from: accounts[3]});
		const stringF62z2v5 = await UFragmentsQS0QlU7.initialize.call(stringxhtFEL5, stringjeuz6o6, uintbMl4mn, {from: accounts[1]});
		const addressbLXl0Ks = await UFragmentsQS0QlU7.initialize.call(addressWNs2HBK, {from: accounts[0]});
		const boolweIRzLk = await UFragmentsQS0QlU7.transfer.call(addresszufWJH, uintY4cL0hT, {from: accounts[0]});

		assert.equal(boolfDjgh0o, false)
		await expect(UFragmentsQS0QlU7.initialize.call(addressWNs2HBK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsQS0QlU7 = await UFragments.new({from: accounts[1]});
		const addressN8z5Eww = accounts[3]
		const uint256mcpYrf = await UFragmentsQS0QlU7.calRebase.call({from: accounts[3]});
		const addressbLXl0Ks = await UFragmentsQS0QlU7.initialize.call(addressN8z5Eww, {from: accounts[0]});

		await expect(UFragmentsQS0QlU7.calRebase.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})