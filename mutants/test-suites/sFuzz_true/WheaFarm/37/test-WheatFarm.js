const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringhBPVaHj = "V3ivvbnbV5F5sJopDQgaTl2m7JPqCO13N6g6dLGFmxrZyUy6eBgja49u4yk"
		const stringoXbsM4T = "orV1TYtatOMHyke6jPohpxValE6FHg5uhaRX157lzBTYd908A3jaWKsNUQnmIlIH5"
		const uint1DJlLO = BigInt("1114")
		const WheatFarmeOslIYQ = await WheatFarm.new(stringhBPVaHj, stringoXbsM4T, uint1DJlLO, {from: accounts[1]});
		const uintNf6DoSP = BigInt("883")
		const addresskao15lC = accounts[4]
		const stringrYeMgO9 = await WheatFarmeOslIYQ.name.call({from: accounts[2]});
//		const boolViMC9W = await WheatFarmeOslIYQ.decreaseAllowance.call(addresskao15lC, uintNf6DoSP, {from: accounts[4]});

		assert.equal(stringrYeMgO9, "V3ivvbnbV5F5sJopDQgaTl2m7JPqCO13N6g6dLGFmxrZyUy6eBgja49u4yk")
		await expect(WheatFarmeOslIYQ.decreaseAllowance.call(addresskao15lC, uintNf6DoSP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringXgPFrj1 = "KUKOpvo3XtOVIpJTedahZWISPb1fhyX1rYRnyvlS8CShV"
		const stringgQtvcRJ = "2THt8gANSc37gYXxxURQ4Db2rBfc2r2R59jjLWooKsjQQCFuXpa8v2YPRmHj8d30xNAORAEobLO8p6na2RoBH8mr2cCa"
		const uintdqmlS16 = BigInt("607")
		const WheatFarmflch08l = await WheatFarm.new(stringXgPFrj1, stringgQtvcRJ, uintdqmlS16, {from: accounts[4]});
		const addressmJi4TM8 = accounts[4]
		const addressr7SwwP0 = accounts[3]
		const uintqwy0waT = BigInt("439")
		const addressfhNJvpc = accounts[1]
		const addressTssKLNm = accounts[1]
		const addressAuvkrMk = accounts[1]
		const addresszVciN7J = accounts[0]
		const uintE1SMc6E = BigInt("59")
		const addressWEKSbxn = accounts[0]
		const uint41wUuO = BigInt("641")
		const addresskESSG11 = accounts[2]
		const uintXMbcNc = await WheatFarmflch08l.allowance.call(addressr7SwwP0, addressmJi4TM8, {from: "0x0000000000000000000000000000000000000001"});
//		const boolSLQj0EG = await WheatFarmflch08l.transferFrom.call(addressTssKLNm, addressfhNJvpc, uintqwy0waT, {from: "0x0000000000000000000000000000000000000001"});
//		const uintfePjZwn = await WheatFarmflch08l.allowance.call(addresszVciN7J, addressAuvkrMk, {from: accounts[3]});
//		const boolDbt7cOl = await WheatFarmflch08l.transfer.call(addressWEKSbxn, uintE1SMc6E, {from: accounts[3]});
//		const boolmBOZqGW = await WheatFarmflch08l.decreaseAllowance.call(addresskESSG11, uint41wUuO, {from: accounts[5]});

		assert.equal(uintXMbcNc, BigInt("0"))
		await expect(WheatFarmflch08l.transferFrom.call(addressTssKLNm, addressfhNJvpc, uintqwy0waT, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringhclQGi2 = "3LwenhToMpCKPgjFFKxmeqt3ca1lS6Nisynqw3S8D0PJmq4n7g21RB1Z"
		const stringuCo6sI5 = "WYDLNkaKtXv789soCOKEd0qTyNHKZrvnFv9G31WUjR8P6puVGE"
		const uintDZa88dI = BigInt("104")
		const WheatFarmNzbMaEi = await WheatFarm.new(stringhclQGi2, stringuCo6sI5, uintDZa88dI, {from: accounts[2]});
		const uintMnhzgbX = BigInt("741")
		const addressHNOgrm0 = accounts[1]
		const uint2y0tFS = BigInt("868")
		const addressz1OqtCm = accounts[5]
		const uintkpGzXlK = BigInt("1636")
		const addressOVQMlJg = accounts[0]
		const boolLDmxq4S = await WheatFarmNzbMaEi.approve.call(addressHNOgrm0, uintMnhzgbX, {from: accounts[3]});
		const boolRzpsq9e = await WheatFarmNzbMaEi.approve.call(addressz1OqtCm, uint2y0tFS, {from: accounts[1]});
//		const boolpFrVkjK = await WheatFarmNzbMaEi.decreaseAllowance.call(addressOVQMlJg, uintkpGzXlK, {from: accounts[1]});

		assert.equal(boolLDmxq4S, true)
		assert.equal(boolRzpsq9e, true)
		await expect(WheatFarmNzbMaEi.decreaseAllowance.call(addressOVQMlJg, uintkpGzXlK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringHxZxYWs = "rqX3PvxuEQ9xNgJ3HMPTVrq5aFLDMgMJGOZ7cvunQiyTgQzMjWAEq3ORJ8shJB3mgy4S5WnXxTNBVa4UenVOA"
		const stringxedAhSE = "BhlZe1UKf"
		const uintfuf0g2A = BigInt("163")
		const WheatFarma0z7x9S = await WheatFarm.new(stringHxZxYWs, stringxedAhSE, uintfuf0g2A, {from: accounts[4]});
		const addressBIpoC7z = accounts[0]
		const addressEai259Y = accounts[0]
		const uintly7LLqX = BigInt("309")
		const addressfMJTm9p = accounts[0]
		const uintOr7ZKJF = BigInt("629")
		const addressr5fgABB = accounts[2]
		const uintXdXZAs2 = await WheatFarma0z7x9S.allowance.call(addressEai259Y, addressBIpoC7z, {from: accounts[4]});
		const boolMNbRUJQ = await WheatFarma0z7x9S.approve.call(addressfMJTm9p, uintly7LLqX, {from: accounts[1]});
//		const boolSwhIwoA = await WheatFarma0z7x9S.transfer.call(addressr5fgABB, uintOr7ZKJF, {from: accounts[0]});
//		const uint8s7WuQJx = await WheatFarma0z7x9S.decimals.call({from: accounts[4]});

		assert.equal(boolMNbRUJQ, true)
		assert.equal(uintXdXZAs2, BigInt("0"))
		await expect(WheatFarma0z7x9S.transfer.call(addressr5fgABB, uintOr7ZKJF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringCJ6ml5 = "6cV442hzUFYEy9v4gCtoqbaXMGdO"
		const stringxxqpNoO = "PfZPU4NH2"
		const uintdz9n6IS = BigInt("827")
		const WheatFarmoz8BiT0 = await WheatFarm.new(stringCJ6ml5, stringxxqpNoO, uintdz9n6IS, {from: accounts[2]});
		const uintc9ZocAj = BigInt("14")
		const addressGstoXRT = accounts[5]
		const uintGluy3BY = BigInt("1594")
		const addressQg8RH0R = accounts[3]
		const addresst2819MS = accounts[3]
		const uintddM61fG = BigInt("1788")
		const addressjPmDEXw = accounts[1]
		const stringCqGP1rB = await WheatFarmoz8BiT0.name.call({from: accounts[4]});
		const boolwwIQTr5 = await WheatFarmoz8BiT0.transfer.call(addressGstoXRT, uintc9ZocAj, {from: accounts[2]});
//		const boolwkU4ERV = await WheatFarmoz8BiT0.transferFrom.call(addresst2819MS, addressQg8RH0R, uintGluy3BY, {from: accounts[2]});
//		const boolISuidF5 = await WheatFarmoz8BiT0.approveAndCall.call(addressjPmDEXw, uintddM61fG, {from: accounts[2]});

		assert.equal(boolwwIQTr5, true)
		assert.equal(stringCqGP1rB, "6cV442hzUFYEy9v4gCtoqbaXMGdO")
		await expect(WheatFarmoz8BiT0.transferFrom.call(addresst2819MS, addressQg8RH0R, uintGluy3BY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringCJ6ml5 = "6cV442hzUFYEy9v4gCtoqbaXMGdO"
		const stringxxqpNoO = "PfZPU4NH2"
		const uintsdv84NR = BigInt("827")
		const WheatFarmoz8BiT0 = await WheatFarm.new(stringCJ6ml5, stringxxqpNoO, uintsdv84NR, {from: accounts[2]});
		const uintkRYIdaK = BigInt("14")
		const addressqQNiLPC = accounts[6]
		const uinthdq2vW = BigInt("1788")
		const address9S5rpd = accounts[1]
		const uintCqyYx3g = BigInt("1244")
		const addressYiLdYZI = accounts[2]
		const addressEPLh66B = accounts[0]
		const stringCqGP1rB = await WheatFarmoz8BiT0.name.call({from: accounts[4]});
		const boolwwIQTr5 = await WheatFarmoz8BiT0.transfer.call(addressqQNiLPC, uintkRYIdaK, {from: accounts[2]});
		const boolISuidF5 = await WheatFarmoz8BiT0.approveAndCall.call(address9S5rpd, uinthdq2vW, {from: accounts[2]});
//		const boolyH4dJcJ = await WheatFarmoz8BiT0.transferFrom.call(addressEPLh66B, addressYiLdYZI, uintCqyYx3g, {from: accounts[1]});

		assert.equal(boolISuidF5, true)
		assert.equal(boolwwIQTr5, true)
		assert.equal(stringCqGP1rB, "6cV442hzUFYEy9v4gCtoqbaXMGdO")
		await expect(WheatFarmoz8BiT0.transferFrom.call(addressEPLh66B, addressYiLdYZI, uintCqyYx3g, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringCJ6ml5 = "6cV442hzUFYEy9v4gCtoqbaXMGdO"
		const stringxxqpNoO = "PfZPU4NH2"
		const uintnpYUKH3 = BigInt("827")
		const WheatFarmoz8BiT0 = await WheatFarm.new(stringCJ6ml5, stringxxqpNoO, uintnpYUKH3, {from: accounts[2]});
		const uintm0OK1ct = BigInt("0")
		const addressp7ld7NF = accounts[5]
		const uintIx59HLg = BigInt("1594")
		const addressO6LbT80 = accounts[3]
		const addressqECjACK = accounts[3]
		const uintYVbu0b8 = BigInt("1083")
		const addressFvG0lGy = accounts[3]
		const uintFKqiHMC = BigInt("1788")
		const addressg40l9cj = accounts[1]
		const stringCqGP1rB = await WheatFarmoz8BiT0.name.call({from: accounts[4]});
		const boolwwIQTr5 = await WheatFarmoz8BiT0.transfer.call(addressp7ld7NF, uintm0OK1ct, {from: accounts[2]});
//		const boolwkU4ERV = await WheatFarmoz8BiT0.transferFrom.call(addressqECjACK, addressO6LbT80, uintIx59HLg, {from: accounts[2]});
//		const boolt7dksL8 = await WheatFarmoz8BiT0.decreaseAllowance.call(addressFvG0lGy, uintYVbu0b8, {from: accounts[3]});
//		const boolISuidF5 = await WheatFarmoz8BiT0.approveAndCall.call(addressg40l9cj, uintFKqiHMC, {from: accounts[2]});

		assert.equal(boolwwIQTr5, true)
		assert.equal(stringCqGP1rB, "6cV442hzUFYEy9v4gCtoqbaXMGdO")
		await expect(WheatFarmoz8BiT0.transferFrom.call(addressqECjACK, addressO6LbT80, uintIx59HLg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringHxZxYWs = "rqX3PvxuEQ9xNgJ3HMPTVrq5aFLDMgMJGOZ7cvunQiyTgQzMjWAEq3ORJ8shJB3mgy4S5WnXxTNBVa4UenVOA"
		const stringxedAhSE = "BhlZe1UKf"
		const uintHNq1YON = BigInt("163")
		const WheatFarma0z7x9S = await WheatFarm.new(stringHxZxYWs, stringxedAhSE, uintHNq1YON, {from: accounts[4]});
		const addressfoW5kWG = accounts[2]
		const addressdvSrKAx = accounts[0]
		const addressq4GHcer = accounts[0]
		const addressjXMQqaK = accounts[2]
		const uintCPArQ9S = BigInt("620")
		const addressSqQjczb = accounts[2]
		const uintITKfaA8 = await WheatFarma0z7x9S.balanceOf.call(addressfoW5kWG, {from: accounts[2]});
		const uintXdXZAs2 = await WheatFarma0z7x9S.allowance.call(addressq4GHcer, addressdvSrKAx, {from: accounts[4]});
//		const boolq6zotq = await WheatFarma0z7x9S.transferownership.call(addressjXMQqaK, {from: accounts[5]});
//		const boolSwhIwoA = await WheatFarma0z7x9S.transfer.call(addressSqQjczb, uintCPArQ9S, {from: accounts[0]});

		assert.equal(uintITKfaA8, BigInt("0"))
		assert.equal(uintXdXZAs2, BigInt("0"))
		await expect(WheatFarma0z7x9S.transferownership.call(addressjXMQqaK, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringvJ3lT1u = "3h2YMhLocvMHTEvol9ZQru4GgJzrdMz8KHUkgumwIlQqUlXkoG1Tn6DW8u7Ux4xduqDkgTHhcFsp563Mxo7tbtVg"
		const stringzkn6IDE = "qYEOkqyUKZNqTs3qgltPzSYA89VXyq1a1fqJrrhBSX"
		const uintF7aicDq = BigInt("1907")
		const WheatFarmVrKFl4 = await WheatFarm.new(stringvJ3lT1u, stringzkn6IDE, uintF7aicDq, {from: "0x0000000000000000000000000000000000000001"});
		const uintHBFIUYQ = BigInt("705")
		const addresskxeJLIR = accounts[0]
		const uintkkIHa6o = BigInt("630")
		const addressrz843WE = accounts[0]
		const addressGqk1k6L = accounts[4]
		const uintbmlJGAV = BigInt("1265")
		const addressc2hvPOL = accounts[0]
		const addressEc62L7S = accounts[2]
		const uintN3eRNPG = BigInt("1769")
		const addressY9SYTM8 = accounts[4]
		const uintUEYUaS8 = BigInt("1669")
		const addresseOtnKwe = accounts[3]
		const addresstXYWw22 = accounts[2]
		const boolB1owbRC = await WheatFarmVrKFl4.transfer.call(addresskxeJLIR, uintHBFIUYQ, {from: accounts[2]});
		const boolOlbnx7c = await WheatFarmVrKFl4.transferFrom.call(addressGqk1k6L, addressrz843WE, uintkkIHa6o, {from: accounts[0]});
		const boolokznJXA = await WheatFarmVrKFl4.transferFrom.call(addressEc62L7S, addressc2hvPOL, uintbmlJGAV, {from: accounts[3]});
		const boolK0ZTLlo = await WheatFarmVrKFl4.transfer.call(addressY9SYTM8, uintN3eRNPG, {from: "0x0000000000000000000000000000000000000001"});
		const boolbcpYkyd = await WheatFarmVrKFl4.transferFrom.call(addresstXYWw22, addresseOtnKwe, uintUEYUaS8, {from: accounts[5]});
	});

	it('test for WheatFarm', async () => {
		const stringAbUHC4v = "EDrRdBKQzzbVPex3AQUalVjCVCSYQqMQrZ3Df4Tmw8r9xHEKQ8mJVQxBxDpK5O30M4s5zf"
		const stringy6TmGIY = "G44Rv4O2xyqX8h75w9Q4o2qfqwvGiOB1OfPdHZIEDj9UehIixYKVE7OGK1EJs2Eg"
		const uintAEu5gfO = BigInt("174")
		const WheatFarm1qPYS6 = await WheatFarm.new(stringAbUHC4v, stringy6TmGIY, uintAEu5gfO, {from: accounts[0]});
		const uintQJkmdL = BigInt("1541")
		const addressNmwofi = accounts[3]
		const addressRjOn2Ep = accounts[5]
		const uintMxYCZLI = BigInt("186")
		const addressDS1JLVY = "0x0000000000000000000000000000000000000001"
		const addressmyJiTpp = accounts[3]
		const uinttMHqHN5 = BigInt("1191")
		const addressfvEmHXe = accounts[3]
		const boolEMcFn9C = await WheatFarm1qPYS6.approve.call(addressNmwofi, uintQJkmdL, {from: accounts[2]});
		const booldZsR6NM = await WheatFarm1qPYS6.transferownership.call(addressRjOn2Ep, {from: accounts[0]});
		const stringKnLjs3E = await WheatFarm1qPYS6.name.call({from: accounts[5]});
//		const boolknY77hk = await WheatFarm1qPYS6.transferFrom.call(addressmyJiTpp, addressDS1JLVY, uintMxYCZLI, {from: accounts[5]});
//		const boolHSkosFa = await WheatFarm1qPYS6.increaseAllowance.call(addressfvEmHXe, uinttMHqHN5, {from: accounts[0]});

		assert.equal(boolEMcFn9C, true)
		assert.equal(booldZsR6NM, true)
		assert.equal(stringKnLjs3E, "EDrRdBKQzzbVPex3AQUalVjCVCSYQqMQrZ3Df4Tmw8r9xHEKQ8mJVQxBxDpK5O30M4s5zf")
		await expect(WheatFarm1qPYS6.transferFrom.call(addressmyJiTpp, addressDS1JLVY, uintMxYCZLI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringHxZxYWs = "rqX3PvxuEQ9xNgJ3HMPTVrq5aFLDMgMJGOZ7cvunQiyTgQzMjWAEq3ORJ8shJB3mgy4S5WnXxTNBVa4UenVOA"
		const stringxedAhSE = "BhlZe1UKf"
		const uintdoNKIdk = BigInt("163")
		const WheatFarma0z7x9S = await WheatFarm.new(stringHxZxYWs, stringxedAhSE, uintdoNKIdk, {from: accounts[4]});
		const uintkM73X3I = BigInt("0")
		const addressR1JpUbO = accounts[0]
		const uintVgh2U7p = BigInt("1079")
		const addresswFCtsGq = accounts[0]
		const addressXERQ1GL = "0x0000000000000000000000000000000000000001"
		const stringsp9sj39 = await WheatFarma0z7x9S.symbol.call({from: accounts[3]});
		const boolu0vkpAP = await WheatFarma0z7x9S.approveAndCall.call(addressR1JpUbO, uintkM73X3I, {from: accounts[4]});
//		const boolmZbUBhL = await WheatFarma0z7x9S.transferFrom.call(addressXERQ1GL, addresswFCtsGq, uintVgh2U7p, {from: accounts[0]});

		assert.equal(boolu0vkpAP, true)
		assert.equal(stringsp9sj39, "BhlZe1UKf")
		await expect(WheatFarma0z7x9S.transferFrom.call(addressXERQ1GL, addresswFCtsGq, uintVgh2U7p, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})