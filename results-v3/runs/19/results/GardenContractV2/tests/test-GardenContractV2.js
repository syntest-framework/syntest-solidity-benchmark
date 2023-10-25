const GardenContractV2 = artifacts.require("GardenContractV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GardenContractV2', (accounts) => {
	it('test for GardenContractV2', async () => {
		const addressPb6JEPf = accounts[2]
		const addressUwuOCPB = accounts[4]
		const addresssMt2dTP = accounts[1]
		const GardenContractV2bafXlV = await GardenContractV2.new(addressPb6JEPf, addressUwuOCPB, addresssMt2dTP, {from: accounts[1]});
		const stringWsqiZ2g = "aIVSuK3MhIxrtDC2ykaKOFkD6AXCIhbSXvKtDFL7QgnOF8pElgJM8MyzMYdr"
		const uintYelbMi = BigInt("213")
		const stringnINDbFr = "9nt7q3w7AAx9tlNEuYUopRUrIJhXP7C7ZCrxlvhjJwzCPCM9Cg6XR8080cde1e1JDqF5rZNNF7M8od"
		const addressE5RhrqS = accounts[1]
		const uintITZyajL = BigInt("101")
		const stringaLYobxv = "BbpnLBJolNlJsPj14baOM"
		const uint256GRqBSy = await GardenContractV2bafXlV.totalTLPGrown.call(stringWsqiZ2g, {from: accounts[2]});
		const uint256G7bzgC0 = await GardenContractV2bafXlV.growthRemaining.call(addressE5RhrqS, stringnINDbFr, uintYelbMi, {from: accounts[4]});
		const stringWdoWJ0g = await GardenContractV2bafXlV.claimDecompose.call(stringaLYobxv, uintITZyajL, {from: accounts[2]});
	});

	it('test for GardenContractV2', async () => {
		const addresskwBVUNz = accounts[4]
		const addressQvEwtka = accounts[4]
		const addresssQrRJFO = accounts[3]
		const GardenContractV2DUDma5r = await GardenContractV2.new(addresskwBVUNz, addressQvEwtka, addresssQrRJFO, {from: accounts[4]});
		const uintjhKA7C = BigInt("199")
		const stringEjNP7hW = "w4hbmTc1Vg1M9MzeBCC3KTnfd617VsqpWH"
		const uintCBMbLeF = BigInt("222")
		const uintoTPg7B0 = BigInt("94")
		const addressAgcREZO = accounts[3]
		const uintrVvxudM = BigInt("2006")
		const uint8s8DdF = BigInt("19")
		const stringDgnjjMT = "qWPiLkJJFlaF8zKXzMLsnmCyEMduRWtkbSzthjIONLTTJwc1nukj9MeF4Grk1Xn42"
		const stringxm0K4zZ = await GardenContractV2DUDma5r.claimDecompose.call(stringEjNP7hW, uintjhKA7C, {from: accounts[3]});
		const uint8DhUHuw = await GardenContractV2DUDma5r.setTimeStamp.call(uintoTPg7B0, uintCBMbLeF, {from: accounts[0]});
		const addressz7MApvA = await GardenContractV2DUDma5r.changeOwner.call(addressAgcREZO, {from: accounts[2]});
		const stringIbnihHJ = await GardenContractV2DUDma5r.decompose.call(stringDgnjjMT, uint8s8DdF, uintrVvxudM, {from: accounts[0]});
	});

	it('test for GardenContractV2', async () => {
		const addressxWpz9O = accounts[4]
		const addressJIrcq0 = "0x0000000000000000000000000000000000000001"
		const addressbKIQpWq = accounts[4]
		const GardenContractV24IVyhJ = await GardenContractV2.new(addressxWpz9O, addressJIrcq0, addressbKIQpWq, {from: accounts[4]});
		const uintNxRy9W2 = BigInt("349")
		const uintz2NdNqO = BigInt("157")
		const stringlbBAyeh = "eOGUOM6xpv0vyDmnY7jRuxTGO"
		const stringqfpSYGX = "PrBSew4y5O25JMk5w5WnccoKMI7s3v87QMyqVDCLhEUFgpbd5QzwdzSM"
		const boolv552p5D = false
		const uintiT3trvS = BigInt("52")
		const stringKERZDGr = "M6db45yMhci41GPQvG5KoGkAdMBP4FWUyaN4u3LhoapBuqgMHa9GqxGFBmlnsYXJbX0A9ly5VHUUjCIuox"
		const uintK2Oj4sU = BigInt("427")
		const uint03gFS1 = BigInt("95")
		const stringPGkvmDW = "5ipmHs"
		const stringYUwr6tS = await GardenContractV24IVyhJ.decompose.call(stringlbBAyeh, uintz2NdNqO, uintNxRy9W2, {from: accounts[2]});
		const uint256XN4mvDL = await GardenContractV24IVyhJ.totalTLPBurnt.call(stringqfpSYGX, {from: accounts[0]});
		const uint256ByKICS6 = await GardenContractV24IVyhJ.plant.call(uintK2Oj4sU, stringKERZDGr, uintiT3trvS, boolv552p5D, {from: accounts[0]});
		const stringZJqSKdU = await GardenContractV24IVyhJ.claimDecompose.call(stringPGkvmDW, uint03gFS1, {from: accounts[3]});
	});

	it('test for GardenContractV2', async () => {
		const addressyGfSGlj = accounts[1]
		const addressAI5dMH = accounts[4]
		const address3GerXQ = accounts[0]
		const GardenContractV2Gu0MP8p = await GardenContractV2.new(addressyGfSGlj, addressAI5dMH, address3GerXQ, {from: accounts[4]});
		const stringLyfkP0 = "fgehNrHQEnM9pizx1ZLk0nM9eBr27MmVjwaGtCtFRd1q9AgqYtxdDnwKJ40tC4gpfc8jLtDbFgUzUhMPstP81kACzh3mJke"
		const uintzyh4A9J = BigInt("29")
		const uintLuWzfqY = BigInt("56")
		const stringLNTc0wE = "mUtudSAWPRzbnk4xksj3isj7Na63sVnKqdtLQreTxWZ8PREAT9pAwYvTkD5wnRs"
		const stringAM1ogRn = "ndC8kLXEYV29OyciqX1Pfl7oG12A6PdlEiWcixR13Z9RiHc3rHaqOVzUdxRC5fUs1uXRYRP3gzejrtYUqDrQWsoxw"
		const uint256ADfFccp = await GardenContractV2Gu0MP8p.totalTLPGrowing.call(stringLyfkP0, {from: accounts[4]});
		const uint8zel4EkT = await GardenContractV2Gu0MP8p.setTimeStamp.call(uintLuWzfqY, uintzyh4A9J, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Wlpn3Hj = await GardenContractV2Gu0MP8p.totalTLPGrown.call(stringLNTc0wE, {from: accounts[0]});
		const uint256fVmERB3 = await GardenContractV2Gu0MP8p.totalTLPBurnt.call(stringAM1ogRn, {from: accounts[1]});
	});

	it('test for GardenContractV2', async () => {
		const addressKmN88PP = accounts[1]
		const addressmB1iXLd = "0x0000000000000000000000000000000000000001"
		const addressJsLZ0iM = accounts[2]
		const GardenContractV2EPgy1Fv = await GardenContractV2.new(addressKmN88PP, addressmB1iXLd, addressJsLZ0iM, {from: accounts[4]});
		const uintPo1VEKS = BigInt("16")
		const uintvvpvAiy = BigInt("114")
		const uintoT9W32P = BigInt("188")
		const stringzQEh9em = "sY4rGpFukbIFV4CuajH8Bm3d1gsmgmuQVaA6nClTJyWO6QHVM6lMI4fO5crSklZkvUmTr6u5SKzz"
		const stringfiBsFc7 = "ci4IGNUDUf2JNA"
		const uint256Di9eK5L = await GardenContractV2EPgy1Fv.getTotalrTLPHarvest.call(uintPo1VEKS, {from: accounts[3]});
		const uint256xhfZ65 = await GardenContractV2EPgy1Fv.getTotalsTLPHarvest.call(uintvvpvAiy, {from: accounts[2]});
		await GardenContractV2EPgy1Fv.totalBedSupply.call(stringzQEh9em, uintoT9W32P, {from: accounts[0]});
		const uint256ov3RM9I = await GardenContractV2EPgy1Fv.totalTLPDecomposed.call(stringfiBsFc7, {from: accounts[3]});
	});

	it('test for GardenContractV2', async () => {
		const addressyYWdeLa = accounts[1]
		const addressOjpAdMp = accounts[4]
		const addressCFhWe8B = accounts[0]
		const GardenContractV2TUdN6gl = await GardenContractV2.new(addressyYWdeLa, addressOjpAdMp, addressCFhWe8B, {from: "0x0000000000000000000000000000000000000001"});
		const stringfTJNpGM = "SfNgwzXzEwMc7gnbuvJRyTAjRzYd9uzFzKpBEikLzohTp7Mykc6gr"
		const stringEaXdtlG = "FSnNI0KDVTF6Wbm7m41SrwJIe7Qy7gg1sonkysxxIBl4mrk37opQO5Ao7GsuPUooR3xy8rJD1LU"
		const stringyBhnjwG = "L9WMmkG6"
		const uint256n5K1wWV = await GardenContractV2TUdN6gl.totalTLPGrowing.call(stringfTJNpGM, {from: accounts[0]});
		const stringVq0CfAs = await GardenContractV2TUdN6gl.harvestAllBeds.call(stringEaXdtlG, {from: "0x0000000000000000000000000000000000000001"});
		const uint256oy8APW = await GardenContractV2TUdN6gl.totalTLPBurnt.call(stringyBhnjwG, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for GardenContractV2', async () => {
		const addressEB8IFCE = accounts[0]
		const addressHuCJrFb = accounts[5]
		const addressWWLa3sT = accounts[4]
		const GardenContractV2Bfxub2 = await GardenContractV2.new(addressEB8IFCE, addressHuCJrFb, addressWWLa3sT, {from: accounts[4]});
		const uintLuwytIN = BigInt("207")
		const stringB8d6WD = "WnracOrFy8IrUkwF28hX4Fy"
		const uintp6KzjcO = BigInt("48")
		const uintp2a4FQq = BigInt("247")
		const stringd9CpKm0 = "kMCrVWsXwuOXInLZ1c1756DMkuO9mCePqD3PILMbJRiXM9Qbf5PQ0Z63rFWP"
		const stringslnT8h = await GardenContractV2Bfxub2.harvest.call(stringB8d6WD, uintLuwytIN, {from: accounts[2]});
		const uint8QYj3dp2 = await GardenContractV2Bfxub2.setTimeStamp.call(uintp2a4FQq, uintp6KzjcO, {from: accounts[0]});
		const stringloAwCU0 = await GardenContractV2Bfxub2.harvestAllBeds.call(stringd9CpKm0, {from: accounts[3]});
	});

	it('test for GardenContractV2', async () => {
		const addressvg4td60 = accounts[2]
		const addresspaXLf1 = accounts[4]
		const addresssPz0KSG = accounts[1]
		const GardenContractV2bafXlV = await GardenContractV2.new(addressvg4td60, addresspaXLf1, addresssPz0KSG, {from: accounts[1]});
		const uintgRehzkR = BigInt("122")
		const stringVNh7smg = "mS3P6NAtR9bnb71T3ipfFEPFN1TeK0vYfgB4NKeYiK7cfIZK2uQt9tkpJCeVCew4MU"
		const stringRJDynD8 = "7481oTCn6OAP55aoXWDC1v4fYghlTvDRzLfTUQvknpK8J6AfBtqqLKaL7knxI1tLnXGF35Sy3z13ltAh4StSUPRiM9ldwV1"
		const uintCFH5QpY = BigInt("213")
		const stringnINDbFr = "9nt7q3w7AAx9tlNEuYUopRUrIJhXP7C7ZCrxlvhjJwzCPCM9Cg6XR8080cde1e1JDqF5rZNNF7M8od"
		const addressY8GAYnG = accounts[4]
		const uintjXyVG7y = BigInt("101")
		const stringaLYobxv = "BbpnLBJolNlJsPj14baOM"
		const stringGM8EhbK = "lQrOjeUKL5ZwnR2un6PkiQNT7UA4NYYDgEyJngHWQhpTnVngm267yr"
		await GardenContractV2bafXlV.totalBedSupply.call(stringVNh7smg, uintgRehzkR, {from: accounts[2]});
		const uint256GRqBSy = await GardenContractV2bafXlV.totalTLPGrown.call(stringRJDynD8, {from: accounts[2]});
		const uint256G7bzgC0 = await GardenContractV2bafXlV.growthRemaining.call(addressY8GAYnG, stringnINDbFr, uintCFH5QpY, {from: accounts[4]});
		const stringWdoWJ0g = await GardenContractV2bafXlV.claimDecompose.call(stringaLYobxv, uintjXyVG7y, {from: accounts[2]});
		const uint256OPCF7dy = await GardenContractV2bafXlV.totalGardenSupply.call(stringGM8EhbK, {from: accounts[5]});
	});

	it('test for GardenContractV2', async () => {
		const addressw7L64l1 = accounts[1]
		const addressK3whUGm = accounts[4]
		const addressNMdPFMQ = accounts[0]
		const GardenContractV2Gu0MP8p = await GardenContractV2.new(addressw7L64l1, addressK3whUGm, addressNMdPFMQ, {from: accounts[4]});
		const uintnNo1KGV = BigInt("776")
		const uintmbfLfCu = BigInt("78")
		const uintHwDqerk = BigInt("143")
		const stringLyfkP0 = "fgehNrHQEnM9pizx1ZLk0nM9eBr27MmVjwaGtCtFRd1q9AgqYtxdDnwKJ40tC4gpfc8jLtDbFgUzUhMPstP81kACzh3mJke"
		const uintZESVgi = BigInt("29")
		const uintXG48IV3 = BigInt("56")
		const stringLNTc0wE = "mUtudSAWPRzbnk4xksj3isj7Na63sVnKqdtLQreTxWZ8PREAT9pAwYvTkD5wnRs"
		const stringAM1ogRn = "ndC8kLXEYV29OyhiqX1Pfl7oG12A6PdlEiWcixR13Z9RiHc3rHaqOVzUdxRC5fUs1uXRYRP3gzejrtYUqDrQWsoxw"
		const uint8OEGBYuR = await GardenContractV2Gu0MP8p.operationBurnMint.call(uintHwDqerk, uintmbfLfCu, uintnNo1KGV, {from: accounts[2]});
		const uint256ADfFccp = await GardenContractV2Gu0MP8p.totalTLPGrowing.call(stringLyfkP0, {from: accounts[4]});
		const uint8zel4EkT = await GardenContractV2Gu0MP8p.setTimeStamp.call(uintXG48IV3, uintZESVgi, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Wlpn3Hj = await GardenContractV2Gu0MP8p.totalTLPGrown.call(stringLNTc0wE, {from: accounts[0]});
		const uint256fVmERB3 = await GardenContractV2Gu0MP8p.totalTLPBurnt.call(stringAM1ogRn, {from: accounts[1]});
	});

	it('test for GardenContractV2', async () => {
		const addressVoNGERA = accounts[2]
		const addressdNKZWZc = accounts[4]
		const addressyu79t0 = accounts[1]
		const GardenContractV2bafXlV = await GardenContractV2.new(addressVoNGERA, addressdNKZWZc, addressyu79t0, {from: accounts[1]});
		const uint9NBA8p = BigInt("213")
		const stringnINDbFr = "9nt7q3w7AAx9tlNEuYUopRUrIJhXP7C7ZCrxlvhjJwzCP9M9Cg6XR8080cde1e1JDqF5rZNNF7M8od"
		const addressSsq8JO5 = accounts[1]
		const uintup4Pvv8 = BigInt("101")
		const stringaLYobxv = "BbpnLBJolNlJsPj14baOM"
		const uint256G7bzgC0 = await GardenContractV2bafXlV.growthRemaining.call(addressSsq8JO5, stringnINDbFr, uint9NBA8p, {from: accounts[4]});
		const stringWdoWJ0g = await GardenContractV2bafXlV.claimDecompose.call(stringaLYobxv, uintup4Pvv8, {from: accounts[2]});
	});

	it('test for GardenContractV2', async () => {
		const addressvRdRwy = accounts[1]
		const addressDnrnlL8 = "0x0000000000000000000000000000000000000001"
		const addressAfY8FO2 = accounts[2]
		const GardenContractV2EPgy1Fv = await GardenContractV2.new(addressvRdRwy, addressDnrnlL8, addressAfY8FO2, {from: accounts[4]});
		const uintHSmxXY6 = BigInt("61")
		const uintD889eWC = BigInt("16")
		const uintgih2zHg = BigInt("114")
		const stringsaIGkXC = "IKjEo1fkljR66Z9MKWGkQ3vFxuRqw9JtCad56kelwW7IWDYH4xl0KXE"
		const addressV1XhWot = accounts[0]
		const uintFJVa8ql = BigInt("222")
		const stringzQEh9em = "sY4rGpFukbIFV4CuajH8Bm3d1gsmgmuQVaA6nClTJyWO6QHVM6lMI4fO5crSklZkvUmTr6u5SKzz"
		const stringfiBsFc7 = "ci4IGNUDUf2JNA"
		const uint256hgFzGfm = await GardenContractV2EPgy1Fv.getTotalsTLPHarvest.call(uintHSmxXY6, {from: accounts[5]});
		const uint256Di9eK5L = await GardenContractV2EPgy1Fv.getTotalrTLPHarvest.call(uintD889eWC, {from: accounts[3]});
		const uint256xhfZ65 = await GardenContractV2EPgy1Fv.getTotalsTLPHarvest.call(uintgih2zHg, {from: accounts[2]});
		const uint256PhmmpWT = await GardenContractV2EPgy1Fv.balanceOf.call(addressV1XhWot, stringsaIGkXC, {from: accounts[1]});
		await GardenContractV2EPgy1Fv.totalBedSupply.call(stringzQEh9em, uintFJVa8ql, {from: accounts[0]});
		const uint256ov3RM9I = await GardenContractV2EPgy1Fv.totalTLPDecomposed.call(stringfiBsFc7, {from: accounts[3]});
	});

	it('test for GardenContractV2', async () => {
		const addressDm8GizV = accounts[0]
		const addressK1wlxfH = accounts[5]
		const addressKU2ZoLq = accounts[4]
		const GardenContractV2Bfxub2 = await GardenContractV2.new(addressDm8GizV, addressK1wlxfH, addressKU2ZoLq, {from: accounts[4]});
		const stringd9CpKm0 = "kMCrVWsXwuOXInLZ1c1756DMkuO9mCeqD3PILMbJiXM9Qbf5PQ0Z63rFWP"
		const uintq04B3HK = BigInt("216")
		const stringGrudiMe = "bqKTfWwtEwWc8o7MnK2eC9JV9hmsiDydTD61fwUykzE5bYjOPAO6TqpksLgeS8JhyEGCcFQQHlGGZ"
		const stringloAwCU0 = await GardenContractV2Bfxub2.harvestAllBeds.call(stringd9CpKm0, {from: accounts[3]});
		const stringRixBYgr = await GardenContractV2Bfxub2.claimDecompose.call(stringGrudiMe, uintq04B3HK, {from: accounts[0]});
	});

	it('test for GardenContractV2', async () => {
		const addressMjGn5cs = accounts[1]
		const addressPAvXdn = "0x0000000000000000000000000000000000000001"
		const addressZabfRbV = accounts[3]
		const GardenContractV2ZJZ2GEX = await GardenContractV2.new(addressMjGn5cs, addressPAvXdn, addressZabfRbV, {from: accounts[0]});
		const stringOpBglyW = "F1TGTvid3VsyHM"
		const uintM7aemI = BigInt("184")
		const uinttgLI8KA = BigInt("81")
		const stringFLallFS = "Hzu"
		const uint256gJMbcrl = await GardenContractV2ZJZ2GEX.totalGardenSupply.call(stringOpBglyW, {from: accounts[0]});
		const uint8m7AZ3vx = await GardenContractV2ZJZ2GEX.setTimeStamp.call(uinttgLI8KA, uintM7aemI, {from: accounts[5]});
		const uint256iFYszL = await GardenContractV2ZJZ2GEX.totalTLPGrown.call(stringFLallFS, {from: accounts[0]});
	});

	it('test for GardenContractV2', async () => {
		const addressEBxkbGN = accounts[1]
		const addressxsAgcWL = "0x0000000000000000000000000000000000000001"
		const addressUkFp1Q = accounts[2]
		const GardenContractV2EPgy1Fv = await GardenContractV2.new(addressEBxkbGN, addressxsAgcWL, addressUkFp1Q, {from: accounts[4]});
		const stringpZJMUvZ = ""
		const uintFlWsa82 = BigInt("16")
		const uintVdWeFTj = BigInt("188")
		const stringzQEh9em = "sY4rGpFukbIFV4CuajH8Bm3d1gsmgmuQVaA6nClTJyWO6QHVM6lMI4fO5crSklZkvUmTr6u5SKzz"
		const uintZ4zojQ = BigInt("89")
		const stringyh3s2o0 = "nGsJDGaDiaccTfcyAYKEg3OxOxTKWU2UTfmB"
		const addressoIyMxXu = "0x0000000000000000000000000000000000000001"
		const stringfiBsFc7 = "ci4IGNUDUf2JNA"
		const uint256DYpWKaB = await GardenContractV2EPgy1Fv.totalTLPBurnt.call(stringpZJMUvZ, {from: accounts[0]});
		const uint256Di9eK5L = await GardenContractV2EPgy1Fv.getTotalrTLPHarvest.call(uintFlWsa82, {from: accounts[3]});
		await GardenContractV2EPgy1Fv.totalBedSupply.call(stringzQEh9em, uintVdWeFTj, {from: accounts[0]});
		const uint256TWlL78a = await GardenContractV2EPgy1Fv.growthRemaining.call(addressoIyMxXu, stringyh3s2o0, uintZ4zojQ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ov3RM9I = await GardenContractV2EPgy1Fv.totalTLPDecomposed.call(stringfiBsFc7, {from: accounts[3]});
	});

	it('test for GardenContractV2', async () => {
		const addressXsDmSyU = accounts[0]
		const addresscu73Yl2 = accounts[5]
		const addressoV5cuHr = accounts[4]
		const GardenContractV2Bfxub2 = await GardenContractV2.new(addressXsDmSyU, addresscu73Yl2, addressoV5cuHr, {from: accounts[4]});
		const stringTQCKE6j = "V9vmfVNyxc47bd9n5HD8QmZTqEJU9RLIuWx5GnyGQAiDKYTXe1TSvIIdXI67u"
		const uintpjak2sG = BigInt("80")
		const stringPECai1 = "NSedvQojqOCaOdqGKdAdTafM1C5NHw5vN7vRAcYmQSuJfyojOSF"
		const uintuhcmQjI = BigInt("216")
		const stringGrudiMe = "bqKTfWwtEwWc8o7MnK2eC9JV9hmsiDydTD61fwUykzE5uYjOPAO6TqpksLgeS8JhyEGCcFQQHlGGZ"
		const uint256RQr7PZ = await GardenContractV2Bfxub2.totalTLPDecomposed.call(stringTQCKE6j, {from: accounts[1]});
		const stringz3fI1F0 = await GardenContractV2Bfxub2.claimDecompose.call(stringPECai1, uintpjak2sG, {from: accounts[3]});
		const stringRixBYgr = await GardenContractV2Bfxub2.claimDecompose.call(stringGrudiMe, uintuhcmQjI, {from: accounts[0]});
	});

	it('test for GardenContractV2', async () => {
		const addressDL8vXzK = accounts[1]
		const addresshtmKLCp = "0x0000000000000000000000000000000000000001"
		const addressM0bfUQF = accounts[2]
		const GardenContractV2EPgy1Fv = await GardenContractV2.new(addressDL8vXzK, addresshtmKLCp, addressM0bfUQF, {from: accounts[4]});
		const uintqzxHuVv = BigInt("6")
		const uintWyXPyYm = BigInt("114")
		const uintTewbnOI = BigInt("188")
		const stringzQEh9em = "sY4rGpFukbIFV4CuajH8Bm3d1gsmgmuQVaA6nClTJyWO6QHVM6lMI4fO5crSklZkvUmTr6u5SKzz"
		const stringqRKprgV = "XvRERPT1OhYWdyNlAFVZSjWkHGMu9BMNoYs2uiPypca8hyajeCmX6NsdWDMy"
		const uintVrLISj4 = BigInt("75")
		const stringv7PwgSR = "BB4umZK3BQaNIPJxC3pQmp3mU1dGyTFk9cpU8DEbvpWKsq9DagP9stN4pe8jHxT5fGObSfIyi4i35"
		const stringfiBsFc7 = "ci4IGNUDUf2JNA"
		const uint256Di9eK5L = await GardenContractV2EPgy1Fv.getTotalrTLPHarvest.call(uintqzxHuVv, {from: accounts[3]});
		const uint256xhfZ65 = await GardenContractV2EPgy1Fv.getTotalsTLPHarvest.call(uintWyXPyYm, {from: accounts[2]});
		await GardenContractV2EPgy1Fv.totalBedSupply.call(stringzQEh9em, uintTewbnOI, {from: accounts[0]});
		const stringiJUS35p = await GardenContractV2EPgy1Fv.harvestAllBeds.call(stringqRKprgV, {from: "0x0000000000000000000000000000000000000001"});
		const stringaAdP09 = await GardenContractV2EPgy1Fv.claimDecompose.call(stringv7PwgSR, uintVrLISj4, {from: accounts[4]});
		const uint256ov3RM9I = await GardenContractV2EPgy1Fv.totalTLPDecomposed.call(stringfiBsFc7, {from: accounts[3]});
	});

	it('test for GardenContractV2', async () => {
		const addressS8Y4aWF = accounts[0]
		const addressqbJLTM = accounts[5]
		const addressT44Vfr3 = accounts[4]
		const GardenContractV2Bfxub2 = await GardenContractV2.new(addressS8Y4aWF, addressqbJLTM, addressT44Vfr3, {from: accounts[4]});
		const addressR7akrX = accounts[3]
		const stringd9CpKm0 = "kMCtVWsXwuOXInLZ1c1756DMkuO9mCeqD3PILMbJiXM9Qbf5PQ0Z63rFWP"
		const uintWFt80b = BigInt("216")
		const stringGrudiMe = "bqKTfWwtEwWc8o7MnK2eC9JV9hmsiDydTD61fwUykzE5bYjOPAO6TqpksLgeS8JhyEGCcFQQHlGGZ"
		const stringz0YsXqd = "xWiA3KAcwhVa2"
		const addressUQtgbok = await GardenContractV2Bfxub2.changeBenefitiary.call(addressR7akrX, {from: accounts[3]});
		const stringloAwCU0 = await GardenContractV2Bfxub2.harvestAllBeds.call(stringd9CpKm0, {from: accounts[3]});
		const stringRixBYgr = await GardenContractV2Bfxub2.claimDecompose.call(stringGrudiMe, uintWFt80b, {from: accounts[0]});
		const uint256YNUo6z5 = await GardenContractV2Bfxub2.totalTLPGrown.call(stringz0YsXqd, {from: accounts[1]});
	});

	it('test for GardenContractV2', async () => {
		const addresswmu6xmR = accounts[0]
		const addressiFRsCBX = accounts[5]
		const addresseGzafnf = accounts[4]
		const GardenContractV2Bfxub2 = await GardenContractV2.new(addresswmu6xmR, addressiFRsCBX, addresseGzafnf, {from: accounts[4]});
		const boolthDNqK5 = true
		const uintyJkXFLr = BigInt("14")
		const stringNyp8FZk = "a2TCnIW0QUVLDHg91IFrZJx9kPknQf8NQqDnuEacRVVmYbzFk2iEb71zsHkuxTBTWK1uDyw7Io3zJBamct7mXJhezAM"
		const uintlCZYQoX = BigInt("1487")
		const uintYfGkWJU = BigInt("55")
		const uintwZWejLh = BigInt("200")
		const stringd9CpKm0 = "kMCrVWsXwuOXInLZ1c1756DMkuO9CePqD3PILMbJiXM9Qbf5PQ0Z63rFWP"
		const stringOSTLP3Z = "F6yLcz7XjekbD62xi3qtjaqPvxlt4ZVGMzswAFjryXjGgbuIOI9B9XkMPIgiIXwHVvgj"
		const uint256JD6tnYr = await GardenContractV2Bfxub2.plant.call(uintlCZYQoX, stringNyp8FZk, uintyJkXFLr, boolthDNqK5, {from: accounts[0]});
		const uint8l1sIUx = await GardenContractV2Bfxub2.setTimeStamp.call(uintwZWejLh, uintYfGkWJU, {from: accounts[0]});
		const stringloAwCU0 = await GardenContractV2Bfxub2.harvestAllBeds.call(stringd9CpKm0, {from: accounts[3]});
		const uint256Qq3zjW9 = await GardenContractV2Bfxub2.totalTLPDecomposed.call(stringOSTLP3Z, {from: accounts[4]});
	});

	it('test for GardenContractV2', async () => {
		const addressNVuNr0F = accounts[0]
		const addressHmkbUzS = accounts[5]
		const addressgVKqs1 = accounts[4]
		const GardenContractV2Bfxub2 = await GardenContractV2.new(addressNVuNr0F, addressHmkbUzS, addressgVKqs1, {from: accounts[4]});
		const uintaItHzqJ = BigInt("77")
		const stringiWHYOnt = "O"
		const stringd9CpKm0 = "kMCtVWsXwuOXInLZ1c1756DMkuO9mCeqD3PILMbJiXM9Qbf5PQ0Z63rFWP"
		const uintUSPt8c = BigInt("216")
		const stringGrudiMe = "bqKTfWwtEwWc8o7MnK2eC9JV9hmsiDydTD61fwUykzE5bYjOPAO6TqpksLgeS8JhyEGCcFQQHlGGZ"
		const stringz0YsXqd = "xWiA3KAcwEhVa2"
		const string5mAgek = await GardenContractV2Bfxub2.withdraw.call(stringiWHYOnt, uintaItHzqJ, {from: accounts[1]});
		const stringloAwCU0 = await GardenContractV2Bfxub2.harvestAllBeds.call(stringd9CpKm0, {from: accounts[3]});
		const stringRixBYgr = await GardenContractV2Bfxub2.claimDecompose.call(stringGrudiMe, uintUSPt8c, {from: accounts[0]});
		const uint256YNUo6z5 = await GardenContractV2Bfxub2.totalTLPGrown.call(stringz0YsXqd, {from: accounts[1]});
	});

	it('test for GardenContractV2', async () => {
		const addressuoCBwM1 = accounts[1]
		const addressbuxAJlT = "0x0000000000000000000000000000000000000001"
		const addressEVXBYI0 = accounts[2]
		const GardenContractV2EPgy1Fv = await GardenContractV2.new(addressuoCBwM1, addressbuxAJlT, addressEVXBYI0, {from: accounts[4]});
		const uintzO8NppO = BigInt("231")
		const stringp0z0aDo = "QVJUSPqWMOcxg8qy0Bf3fAi6ugF8vVe3tK7AVnXeappzXmOf2ydV"
		const uintesXqtOk = BigInt("39")
		const uint256DSl4RP5 = await GardenContractV2EPgy1Fv.timeUntilNextTLP.call(stringp0z0aDo, uintzO8NppO, {from: accounts[1]});
		const uint256Di9eK5L = await GardenContractV2EPgy1Fv.getTotalrTLPHarvest.call(uintesXqtOk, {from: accounts[3]});
	});

	it('test for GardenContractV2', async () => {
		const addressRdVwIjH = accounts[0]
		const addressmrVpCtt = accounts[5]
		const addressWITM1cQ = accounts[4]
		const GardenContractV2Bfxub2 = await GardenContractV2.new(addressRdVwIjH, addressmrVpCtt, addressWITM1cQ, {from: accounts[4]});
		const stringJrkx1Nn = "5LEMXMAHOZJ473LXH7UVwtKUz29H0kiLh3h4h8A6iNc2"
		const addressIBFvOY = accounts[2]
		const stringd9CpKm0 = "kMCrVWsXwuOXInLZ1c1756DMkuO9CePqD3PILMbJiXM9Qb5PQ0Z63rFWP"
		const uint1kv7z9 = BigInt("95")
		const uint256PWUQlIR = await GardenContractV2Bfxub2.balanceOf.call(addressIBFvOY, stringJrkx1Nn, {from: accounts[4]});
		const stringloAwCU0 = await GardenContractV2Bfxub2.harvestAllBeds.call(stringd9CpKm0, {from: accounts[3]});
		const uint256s0lOmzN = await GardenContractV2Bfxub2.getTotalrTLPHarvest.call(uint1kv7z9, {from: accounts[2]});
	});

	it('test for GardenContractV2', async () => {
		const addressexUbEN4 = accounts[0]
		const addressYSOVaud = accounts[5]
		const addressyFFNJs9 = accounts[4]
		const GardenContractV2Bfxub2 = await GardenContractV2.new(addressexUbEN4, addressYSOVaud, addressyFFNJs9, {from: accounts[4]});
		const addressjhKYVlk = accounts[0]
		const stringd9CpKm0 = "kMCrVWsXwuOXInLZ1c1756DMkuO9CePqD3PILMbJiXM9Qbf5PQ0Z63rFWP"
		const addressDrrQRi = await GardenContractV2Bfxub2.renounceTokenOwner.call(addressjhKYVlk, {from: accounts[4]});
		const stringloAwCU0 = await GardenContractV2Bfxub2.harvestAllBeds.call(stringd9CpKm0, {from: accounts[3]});
	});

	it('test for GardenContractV2', async () => {
		const addressbo36LIs = accounts[1]
		const addresshLGHzle = "0x0000000000000000000000000000000000000001"
		const addressYE9F043 = accounts[2]
		const GardenContractV2EPgy1Fv = await GardenContractV2.new(addressbo36LIs, addresshLGHzle, addressYE9F043, {from: accounts[4]});
		const addressT92Bath = accounts[4]
		const addressf3SztpP = accounts[0]
		const uintvIFcLHV = BigInt("39")
		const addressVJtCG7 = await GardenContractV2EPgy1Fv.addTokenOwner.call(addressf3SztpP, addressT92Bath, {from: accounts[4]});
		const uint256Di9eK5L = await GardenContractV2EPgy1Fv.getTotalrTLPHarvest.call(uintvIFcLHV, {from: accounts[3]});
	});

	it('test for GardenContractV2', async () => {
		const addressMVGzfaN = accounts[0]
		const addressmwP3Z4s = accounts[5]
		const addressbsB8Wig = accounts[4]
		const GardenContractV2Bfxub2 = await GardenContractV2.new(addressMVGzfaN, addressmwP3Z4s, addressbsB8Wig, {from: accounts[4]});
		const addressxDkm1J2 = accounts[0]
		const uintErghFDC = BigInt("216")
		const stringGrudiMe = "bqKTfWwtEwWc8o7MnK2eC9JV9hmsiDydTD61fwUykzE5bYjOPAO6TqpksLgeS8JhyEGCcFQQHlGGZ"
		const addressK869cb6 = await GardenContractV2Bfxub2.changeOwner.call(addressxDkm1J2, {from: accounts[4]});
		const stringRixBYgr = await GardenContractV2Bfxub2.claimDecompose.call(stringGrudiMe, uintErghFDC, {from: accounts[0]});
	});
})