const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringycE6G7 = "vg1n4axVBHYpIkHTwOg4YgXnpplJevR6Wz55apHcguWiSAdm4rC2JtTpk8Ds1A6EWrZ"
		const stringbCv5726 = "mcmQbtpnWJK6FcGJrFNGB0dxMFkPwksti1IhnbWGt1sF0tXEzUdmiRpiCpiyk2qEweyKnxPgIFiaAu"
		const uint0Fd0sO = BigInt("62")
		const FinalVbPnqHt = await Final.new(stringycE6G7, stringbCv5726, uint0Fd0sO, {from: accounts[3]});
		const addresss2vs19u = accounts[1]
		const uintC74DEZd = BigInt("1127")
		const addressoIMMS4f = accounts[1]
		const uintV7BSP4x = BigInt("846")
		const addressbM9gtX = accounts[1]
		const uintA3vdMN = BigInt("1423")
		const addressJvoN4ps = accounts[5]
		const boolh93HT5D = await FinalVbPnqHt.transferownership.call(addresss2vs19u, {from: accounts[5]});
		const boolWlrgJBr = await FinalVbPnqHt.transfer.call(addressoIMMS4f, uintC74DEZd, {from: accounts[1]});
		const boolxdmuCjX = await FinalVbPnqHt.transfer.call(addressbM9gtX, uintV7BSP4x, {from: accounts[0]});
		const booltHdVqx1 = await FinalVbPnqHt.approveAndCall.call(addressJvoN4ps, uintA3vdMN, {from: accounts[2]});

		await expect(FinalVbPnqHt.transferownership.call(addresss2vs19u, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringYZBsJlm = "ORuZoi66KiJaAzniwfjFRqCQZdEMX3j7jWGDpmNQ"
		const string09ASyK = "eGVTHk5TDgJTR3Ui7GDw3d4XoSxjSge6ptAYvIzdt2VXDATbZSL5wDE5Hh2r74CLYe3XtHA1e3KCSIy"
		const uintWOMcg7y = BigInt("138")
		const FinalIi9pzwE = await Final.new(stringYZBsJlm, string09ASyK, uintWOMcg7y, {from: accounts[3]});
		const uintGvjyMQG = BigInt("669")
		const addressjdkyMi = accounts[3]
		const uintmJV37s7 = BigInt("827")
		const addressNgPZBT1 = accounts[0]
		const stringe2Fnvn0 = await FinalIi9pzwE.name.call({from: accounts[3]});
		const uint8RJTwdlb = await FinalIi9pzwE.decimals.call({from: accounts[4]});
		const booleFIbqgo = await FinalIi9pzwE.approve.call(addressjdkyMi, uintGvjyMQG, {from: accounts[3]});
		const uintOz7xFna = await FinalIi9pzwE.totalSupply.call({from: accounts[5]});
		const boolrbUpgUc = await FinalIi9pzwE.increaseAllowance.call(addressNgPZBT1, uintmJV37s7, {from: accounts[5]});

		assert.equal(booleFIbqgo, true)
		assert.equal(stringe2Fnvn0, "ORuZoi66KiJaAzniwfjFRqCQZdEMX3j7jWGDpmNQ")
		assert.equal(uint8RJTwdlb, BigInt("18"))
		assert.equal(uintOz7xFna, BigInt("138000000000000000000"))
		await expect(FinalIi9pzwE.increaseAllowance.call(addressNgPZBT1, uintmJV37s7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringodEbRVf = "uxc5x1xwvQcUQdOiRdztLBJnjglsAzO9rqwEoi1sSC2RK3r4y"
		const string5T0T8x = "62E3Gx1Xj9r7I7qbpRC17vVCHv"
		const uinttjY14D2 = BigInt("1086")
		const FinalYsswChP = await Final.new(stringodEbRVf, string5T0T8x, uinttjY14D2, {from: accounts[0]});
		const addresszvq4VRq = accounts[1]
		const uintKCXRRrg = BigInt("13")
		const addressKskOAyE = accounts[3]
		const addressqCBKYCT = accounts[0]
		const addressfh4VtWP = accounts[0]
		const uintGm442Z = BigInt("1366")
		const addressYCaDDJ9 = accounts[5]
		const uintzWb97pM = await FinalYsswChP.balanceOf.call(addresszvq4VRq, {from: accounts[2]});
		const stringLmXrXe = await FinalYsswChP.symbol.call({from: accounts[4]});
		const boolzRxKFTi = await FinalYsswChP.transfer.call(addressKskOAyE, uintKCXRRrg, {from: accounts[1]});
		const booleVZYf5J = await FinalYsswChP.transferownership.call(addressqCBKYCT, {from: accounts[2]});
		const uintpBQNO7n = await FinalYsswChP.balanceOf.call(addressfh4VtWP, {from: accounts[0]});
		const boolWBXy3y7 = await FinalYsswChP.approve.call(addressYCaDDJ9, uintGm442Z, {from: accounts[2]});

		assert.equal(stringLmXrXe, "62E3Gx1Xj9r7I7qbpRC17vVCHv")
		assert.equal(uintzWb97pM, BigInt("0"))
		await expect(FinalYsswChP.transfer.call(addressKskOAyE, uintKCXRRrg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringIXE4wS = "Hn9Hk2j9OxrIuElttYqKf6zQ5NSX81O3VrF75UaBIrTb3FbajcD18fTb3LPCBUhQ5taYemjyN9P8TbboKMOD4Q7"
		const stringiMSjTaC = "kIu2E8onMthoPVBl6681hfzUPDMH3unSL7qw4U7FGFGq8AkMnQBTHS"
		const uintM9mRZ6h = BigInt("132")
		const FinalipIcHCR = await Final.new(stringIXE4wS, stringiMSjTaC, uintM9mRZ6h, {from: accounts[2]});
		const addressvnrp26U = accounts[0]
		const uintSuyz2AE = BigInt("714")
		const addressQVae47g = accounts[1]
		const uintJbtEUFO = BigInt("1678")
		const address3J3sUg = "0x0000000000000000000000000000000000000001"
		const uintaVa2Hct = await FinalipIcHCR.balanceOf.call(addressvnrp26U, {from: "0x0000000000000000000000000000000000000001"});
		const boolzmLttyw = await FinalipIcHCR.approve.call(addressQVae47g, uintSuyz2AE, {from: accounts[1]});
		const boolFzi5tW = await FinalipIcHCR.approveAndCall.call(address3J3sUg, uintJbtEUFO, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolzmLttyw, true)
		assert.equal(uintaVa2Hct, BigInt("0"))
		await expect(FinalipIcHCR.approveAndCall.call(address3J3sUg, uintJbtEUFO, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringPWY2dRZ = "73Hlen7sIFqq253QATx9oxksykLvoCCkXdNmI4frXsaXGKdVjLxuwntOoOXhtzq38xWVgfyXBJz7bN3ftQYC4OWmbif"
		const stringCh5t7x8 = "cl8djwClFiEFivNAJ"
		const uintdiYCuuN = BigInt("237")
		const FinalI3BlNUS = await Final.new(stringPWY2dRZ, stringCh5t7x8, uintdiYCuuN, {from: accounts[3]});
		const uintLTZDsIr = BigInt("1947")
		const addresskJkzYl = accounts[4]
		const addressGNkNGLZ = accounts[2]
		const stringW1edNJ2 = await FinalI3BlNUS.name.call({from: accounts[3]});
		const stringbxFvW6 = await FinalI3BlNUS.name.call({from: "0x0000000000000000000000000000000000000001"});
		const booltXF5iKu = await FinalI3BlNUS.transferFrom.call(addressGNkNGLZ, addresskJkzYl, uintLTZDsIr, {from: accounts[1]});

		assert.equal(stringW1edNJ2, "73Hlen7sIFqq253QATx9oxksykLvoCCkXdNmI4frXsaXGKdVjLxuwntOoOXhtzq38xWVgfyXBJz7bN3ftQYC4OWmbif")
		assert.equal(stringbxFvW6, "73Hlen7sIFqq253QATx9oxksykLvoCCkXdNmI4frXsaXGKdVjLxuwntOoOXhtzq38xWVgfyXBJz7bN3ftQYC4OWmbif")
		await expect(FinalI3BlNUS.transferFrom.call(addressGNkNGLZ, addresskJkzYl, uintLTZDsIr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringHtaY44g = "ujQVbCjv9MUPXwnpacUu4v9YkdXzQQdkbP99wgZl1lFSb2dfQeXNdDJIYUbyHbgMp4eFukTBLHmsQYJGE"
		const stringXb8lu31 = "HIoPuoPiUgTgB5kOJEmUr9vqSKFdQwy"
		const uintmPJnGqZ = BigInt("242")
		const FinalXl9vArq = await Final.new(stringHtaY44g, stringXb8lu31, uintmPJnGqZ, {from: accounts[1]});
		const uintfPkV75q = BigInt("1638")
		const addressbg52FGl = accounts[2]
		const uintBxNa7Yj = BigInt("1143")
		const addressDJdsKl5 = "0x0000000000000000000000000000000000000001"
		const boolPC9lDgO = await FinalXl9vArq.transfer.call(addressbg52FGl, uintfPkV75q, {from: accounts[1]});
		const uint8KV2Kkuo = await FinalXl9vArq.decimals.call({from: accounts[3]});
		const stringYiJODg0 = await FinalXl9vArq.name.call({from: accounts[5]});
		const boolTGW9pgI = await FinalXl9vArq.approve.call(addressDJdsKl5, uintBxNa7Yj, {from: accounts[3]});

		assert.equal(boolPC9lDgO, true)
		assert.equal(boolTGW9pgI, true)
		assert.equal(stringYiJODg0, "ujQVbCjv9MUPXwnpacUu4v9YkdXzQQdkbP99wgZl1lFSb2dfQeXNdDJIYUbyHbgMp4eFukTBLHmsQYJGE")
		assert.equal(uint8KV2Kkuo, BigInt("18"))
	});

	it('test for Final', async () => {
		const stringc3dd5qg = "iHsA4hyT1o3gyETFrhwVTpx6Avg2YBxU9LSXIw9zKn2QP6SwETlwAjd8V2K35aalmvGwSH8ak"
		const stringQBKndkB = "2Ge9xbLYBhe8vesEqytFLsFSq93gbu7ENLKXQSDMhhqhLgTWr"
		const uintpCeNiUD = BigInt("128")
		const FinalgWCO8zs = await Final.new(stringc3dd5qg, stringQBKndkB, uintpCeNiUD, {from: "0x0000000000000000000000000000000000000001"});
		const uintUkIrp4U = BigInt("1309")
		const addressVlLhw0i = accounts[1]
		const addressFYHOKx4 = accounts[4]
		const addressTee7G6c = accounts[0]
		const addressWOkvh1J = accounts[2]
		const uintnd8lZEw = BigInt("1479")
		const addressBedtjQ = accounts[0]
		const uintTH9Ii1D = BigInt("1196")
		const addresskKK8ZTI = accounts[2]
		const uintpWAyA41 = BigInt("1898")
		const addresssCNmCQK = accounts[4]
		const boolLl70I5o = await FinalgWCO8zs.transferFrom.call(addressFYHOKx4, addressVlLhw0i, uintUkIrp4U, {from: accounts[0]});
		const uintuJcnLUB = await FinalgWCO8zs.allowance.call(addressWOkvh1J, addressTee7G6c, {from: accounts[4]});
		const uint8xGhQUOq = await FinalgWCO8zs.decimals.call({from: accounts[2]});
		const boolZGj7iIu = await FinalgWCO8zs.approve.call(addressBedtjQ, uintnd8lZEw, {from: accounts[3]});
		const boolaVBXApa = await FinalgWCO8zs.transfer.call(addresskKK8ZTI, uintTH9Ii1D, {from: "0x0000000000000000000000000000000000000001"});
		const boolLgzyFh = await FinalgWCO8zs.increaseAllowance.call(addresssCNmCQK, uintpWAyA41, {from: accounts[4]});
	});

	it('test for Final', async () => {
		const stringHtaY44g = "ujQVbCjv9MUPXwnpacUu4v9YkdXzQQdkbP99wgZl1lFSb2dfQeXNdDJIYUbyHbgMp4eFukTBLHmsQYJGE"
		const stringXb8lu31 = "HIoPuoPiUgTgB5kOJEmUr9vqSKFdQwy"
		const uintjSlQeQ1 = BigInt("242")
		const FinalXl9vArq = await Final.new(stringHtaY44g, stringXb8lu31, uintjSlQeQ1, {from: accounts[1]});
		const uint7WAnrm = BigInt("1828")
		const addressYPmi41f = accounts[2]
		const uintOOmjsjb = BigInt("1706")
		const addressgRgCQgy = "0x0000000000000000000000000000000000000001"
		const addressrET4ZSk = accounts[1]
		const boolUaxOcJQ = await FinalXl9vArq.approveAndCall.call(addressYPmi41f, uint7WAnrm, {from: accounts[1]});
		const bool24BiTs = await FinalXl9vArq.transfer.call(addressgRgCQgy, uintOOmjsjb, {from: accounts[0]});
		const uintT6FaIc7 = await FinalXl9vArq.balanceOf.call(addressrET4ZSk, {from: accounts[1]});
		const stringYPdCudH = await FinalXl9vArq.name.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolUaxOcJQ, true)
		await expect(FinalXl9vArq.transfer.call(addressgRgCQgy, uintOOmjsjb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringodEbRVf = "uxc5x1xwvQcUQdOiRdztLBJnjglsAzO9rqwEoi1sSC2RK3r4y"
		const string5T0T8x = "62E3Gx1Xj9r7I7qbpRC17vVCHv"
		const uintb7X6ZCy = BigInt("1086")
		const FinalYsswChP = await Final.new(stringodEbRVf, string5T0T8x, uintb7X6ZCy, {from: accounts[0]});
		const uintYor0EEF = BigInt("0")
		const addressf71ZEUz = accounts[3]
		const boolzRxKFTi = await FinalYsswChP.transfer.call(addressf71ZEUz, uintYor0EEF, {from: accounts[1]});
		const stringIA463r = await FinalYsswChP.symbol.call({from: accounts[3]});
		const stringF5w2U8C = await FinalYsswChP.symbol.call({from: accounts[1]});

		assert.equal(boolzRxKFTi, true)
		assert.equal(stringF5w2U8C, "62E3Gx1Xj9r7I7qbpRC17vVCHv")
		assert.equal(stringIA463r, "62E3Gx1Xj9r7I7qbpRC17vVCHv")
	});

	it('test for Final', async () => {
		const stringodEbRVf = "uxc5x1xwvQcUQdOiRdztLBJnjglsAzO9rqwEoi1sSC2RK3r4y"
		const string5T0T8x = "62E3Gx1Xj9r7I7qbpRC17vVCHv"
		const uintgNDPUi3 = BigInt("1086")
		const FinalYsswChP = await Final.new(stringodEbRVf, string5T0T8x, uintgNDPUi3, {from: accounts[0]});
		const uintfsGnj4t = BigInt("1798")
		const addressGye8fZ = accounts[5]
		const addressmtFIxh = accounts[3]
		const uintEvvbddw = BigInt("13")
		const addressPIFbDhG = accounts[4]
		const boolj981JOo = await FinalYsswChP.approveAndCall.call(addressGye8fZ, uintfsGnj4t, {from: accounts[0]});
		const booli0JqvdK = await FinalYsswChP.transferownership.call(addressmtFIxh, {from: accounts[0]});
		const boolzRxKFTi = await FinalYsswChP.transfer.call(addressPIFbDhG, uintEvvbddw, {from: accounts[1]});

		assert.equal(booli0JqvdK, true)
		assert.equal(boolj981JOo, true)
		await expect(FinalYsswChP.transfer.call(addressPIFbDhG, uintEvvbddw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})